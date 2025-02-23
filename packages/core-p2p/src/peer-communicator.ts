import { app } from "@blockpool-io/core-container";
import { EventEmitter, Logger, P2P } from "@blockpool-io/core-interfaces";
import { Blocks, Interfaces, Transactions, Validation } from "@blockpool-io/crypto";
import { http } from "@arkecosystem/utils";
import dayjs from "dayjs";
import delay from "delay";
import { SCClientSocket } from "socketcluster-client";
import { constants } from "./constants";
import { SocketErrors } from "./enums";
import { PeerPingTimeoutError, PeerStatusResponseError, PeerVerificationFailedError } from "./errors";
import { IPeerConfig, IPeerPingResponse } from "./interfaces";
import { PeerVerifier } from "./peer-verifier";
import { RateLimiter } from "./rate-limiter";
import { replySchemas } from "./schemas";
import { buildRateLimiter, isValidVersion, socketEmit } from "./utils";

export class PeerCommunicator implements P2P.IPeerCommunicator {
    private readonly logger: Logger.ILogger = app.resolvePlugin<Logger.ILogger>("logger");
    private readonly emitter: EventEmitter.EventEmitter = app.resolvePlugin<EventEmitter.EventEmitter>("event-emitter");
    private outgoingRateLimiter: RateLimiter;

    constructor(private readonly connector: P2P.IPeerConnector) {
        this.outgoingRateLimiter = buildRateLimiter({
            // White listing anybody here means we would not throttle ourselves when sending
            // them requests, ie we could spam them.
            whitelist: [],
            remoteAccess: [],
            rateLimit: app.resolveOptions("p2p").rateLimit,
        });
    }

    public async postBlock(peer: P2P.IPeer, block: Interfaces.IBlock) {
        const postBlockTimeout = 10000;
        return this.emit(
            peer,
            "p2p.peer.postBlock",
            {
                block: Blocks.Block.serializeWithTransactions({
                    ...block.data,
                    transactions: block.transactions.map(tx => tx.data),
                }),
            },
            postBlockTimeout,
        );
    }

    public async postTransactions(peer: P2P.IPeer, transactions: Interfaces.ITransactionJson[]): Promise<any> {
        const postTransactionsTimeout = 10000;
        return this.emit(peer, "p2p.peer.postTransactions", { transactions }, postTransactionsTimeout);
    }

    // ! do not rely on parameter timeoutMsec as guarantee that ping method will resolve within it !
    // ! peerVerifier.checkState can take more time !
    // TODO refactor on next version ?
    public async ping(peer: P2P.IPeer, timeoutMsec: number, force: boolean = false): Promise<any> {
        const deadline = new Date().getTime() + timeoutMsec;

        if (peer.recentlyPinged() && !force) {
            return undefined;
        }

        const getStatusTimeout = timeoutMsec < 5000 ? timeoutMsec : 5000;
        const pingResponse: IPeerPingResponse = await this.emit(
            peer,
            "p2p.peer.getStatus",
            undefined,
            getStatusTimeout,
        );

        if (!pingResponse) {
            throw new PeerStatusResponseError(peer.ip);
        }

        if (process.env.CORE_SKIP_PEER_STATE_VERIFICATION !== "true") {
            if (!this.validatePeerConfig(peer, pingResponse.config)) {
                throw new PeerVerificationFailedError();
            }

            const peerVerifier = new PeerVerifier(this, peer);

            if (deadline <= new Date().getTime()) {
                throw new PeerPingTimeoutError(timeoutMsec);
            }

            peer.verificationResult = await peerVerifier.checkState(pingResponse.state, deadline);

            if (!peer.isVerified()) {
                throw new PeerVerificationFailedError();
            }
        }

        peer.lastPinged = dayjs();
        peer.state = pingResponse.state;
        peer.plugins = pingResponse.config.plugins;

        return pingResponse.state;
    }

    public async pingPorts(peer: P2P.IPeer): Promise<void> {
        Promise.all(
            Object.entries(peer.plugins).map(async ([name, plugin]) => {
                peer.ports[name] = -1;
                try {
                    const { statusCode } = await http.head(`http://${peer.ip}:${plugin.port}/`);

                    if (statusCode === 200) {
                        peer.ports[name] = plugin.port;
                    }
                } catch {
                    // tslint:disable-next-line: no-empty
                }
            }),
        );
    }

    public validatePeerConfig(peer: P2P.IPeer, config: IPeerConfig): boolean {
        if (config.network.nethash !== app.getConfig().get("network.nethash")) {
            return false;
        }

        peer.version = config.version;

        if (!isValidVersion(peer)) {
            return false;
        }

        return true;
    }

    public async getPeers(peer: P2P.IPeer): Promise<any> {
        this.logger.debug(`Fetching a fresh peer list from ${peer.url}`);

        const getPeersTimeout = 5000;
        return this.emit(peer, "p2p.peer.getPeers", undefined, getPeersTimeout);
    }

    public async hasCommonBlocks(peer: P2P.IPeer, ids: string[], timeoutMsec?: number): Promise<any> {
        try {
            const getCommonBlocksTimeout = timeoutMsec < 5000 ? timeoutMsec : 5000;
            const body: any = await this.emit(peer, "p2p.peer.getCommonBlocks", { ids }, getCommonBlocksTimeout);

            if (!body || !body.common) {
                return false;
            }

            return body.common;
        } catch (error) {
            const sfx = timeoutMsec !== undefined ? ` within ${timeoutMsec} ms` : "";

            this.logger.error(`Could not determine common blocks with ${peer.ip}${sfx}: ${error.message}`);

            this.emitter.emit("internal.p2p.disconnectPeer", { peer });
        }

        return false;
    }

    public async getPeerBlocks(
        peer: P2P.IPeer,
        {
            fromBlockHeight,
            blockLimit = constants.MAX_DOWNLOAD_BLOCKS,
            headersOnly,
        }: { fromBlockHeight: number; blockLimit?: number; headersOnly?: boolean },
    ): Promise<Interfaces.IBlockData[]> {
        const maxPayload = headersOnly ? blockLimit * constants.KILOBYTE : constants.DEFAULT_MAX_PAYLOAD;

        const peerBlocks = await this.emit(
            peer,
            "p2p.peer.getBlocks",
            {
                lastBlockHeight: fromBlockHeight,
                blockLimit,
                headersOnly,
                serialized: true,
            },
            app.resolveOptions("p2p").getBlocksTimeout,
            maxPayload,
            false,
        );

        if (!peerBlocks) {
            this.logger.debug(
                `Peer ${peer.ip} did not return any blocks via height ${fromBlockHeight.toLocaleString()}.`,
            );
            return [];
        }

        for (const block of peerBlocks) {
            if (!block.transactions) {
                continue;
            }

            block.transactions = block.transactions.map(transaction => {
                const { data } = Transactions.TransactionFactory.fromBytesUnsafe(Buffer.from(transaction, "hex"));
                data.blockId = block.id;
                return data;
            });
        }

        return peerBlocks;
    }

    private parseHeaders(peer: P2P.IPeer, response): void {
        if (response.headers.height) {
            peer.state.height = +response.headers.height;
        }
    }

    private validateReply(peer: P2P.IPeer, reply: any, endpoint: string): boolean {
        const schema = replySchemas[endpoint];
        if (schema === undefined) {
            this.logger.error(`Can't validate reply from "${endpoint}": none of the predefined schemas matches.`);
            return false;
        }

        const { error } = Validation.validator.validate(schema, reply);
        if (error) {
            if (process.env.CORE_P2P_PEER_VERIFIER_DEBUG_EXTRA) {
                this.logger.debug(`Got unexpected reply from ${peer.url}/${endpoint}: ${error}`);
            }

            return false;
        }

        return true;
    }

    private async emit(
        peer: P2P.IPeer,
        event: string,
        data?: any,
        timeout?: number,
        maxPayload?: number,
        disconnectOnError: boolean = true,
    ) {
        await this.throttle(peer, event);

        let response;
        try {
            this.connector.forgetError(peer);

            const timeBeforeSocketCall: number = new Date().getTime();

            maxPayload = maxPayload || constants.DEFAULT_MAX_PAYLOAD_CLIENT;
            const connection: SCClientSocket = this.connector.connect(peer, maxPayload);
            response = await socketEmit(
                peer.ip,
                connection,
                event,
                data,
                {
                    "Content-Type": "application/json",
                },
                timeout,
            );

            peer.latency = new Date().getTime() - timeBeforeSocketCall;
            this.parseHeaders(peer, response);

            if (!this.validateReply(peer, response.data, event)) {
                throw new Error(`Response validation failed from peer ${peer.ip} : ${JSON.stringify(response.data)}`);
            }
        } catch (e) {
            this.handleSocketError(peer, event, e, disconnectOnError);
            return undefined;
        }

        return response.data;
    }

    private async throttle(peer: P2P.IPeer, event: string): Promise<void> {
        const msBeforeReCheck = 1000;
        while (await this.outgoingRateLimiter.hasExceededRateLimit(peer.ip, event)) {
            this.logger.debug(
                `Throttling outgoing requests to ${peer.ip}/${event} to avoid triggering their rate limit`,
            );
            await delay(msBeforeReCheck);
        }
    }

    private handleSocketError(peer: P2P.IPeer, event: string, error: Error, disconnect: boolean = true): void {
        if (!error.name) {
            return;
        }

        this.connector.setError(peer, error.name);

        switch (error.name) {
            case SocketErrors.Validation:
                this.logger.debug(`Socket data validation error (peer ${peer.ip}) : ${error.message}`);
                break;
            case "Error":
                if (process.env.CORE_P2P_PEER_VERIFIER_DEBUG_EXTRA) {
                    this.logger.debug(`Response error (peer ${peer.ip}/${event}) : ${error.message}`);
                }
                break;
            default:
                if (process.env.CORE_P2P_PEER_VERIFIER_DEBUG_EXTRA) {
                    this.logger.debug(`Socket error (peer ${peer.ip}) : ${error.message}`);
                }
                if (disconnect) {
                    this.emitter.emit("internal.p2p.disconnectPeer", { peer });
                }
        }
    }
}
