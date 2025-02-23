import { app } from "@blockpool-io/core-container";
import { ApplicationEvents } from "@blockpool-io/core-event-emitter";
import { Logger, P2P } from "@blockpool-io/core-interfaces";
import { NetworkStateStatus } from "@blockpool-io/core-p2p";
import { Wallets } from "@blockpool-io/core-state";
import { Connection } from "@arkecosystem/client";
import { Blocks, Crypto, Interfaces, Managers, Transactions, Types } from "@blockpool-io/crypto";
import isEmpty from "lodash.isempty";
import uniq from "lodash.uniq";
import pluralize from "pluralize";
import { Client } from "./client";
import { Delegate } from "./delegate";
import { HostNoResponseError, RelayCommunicationError } from "./errors";

export class ForgerManager {
    private readonly logger: Logger.ILogger = app.resolvePlugin<Logger.ILogger>("logger");
    private readonly config = app.getConfig();

    private secrets: string[];
    private network: Types.NetworkType;
    private client: Client;
    private delegates: Delegate[];
    private usernames: { [key: string]: string };
    private isStopped: boolean;
    private round: P2P.ICurrentRound;
    private initialized: boolean;

    private crossClient: Connection;
    private scNet: any;

    constructor(options) {
        this.secrets = this.config.get("delegates.secrets");
        this.network = this.config.get("network");
        this.client = new Client(options.hosts);
    }

    public async startForging(bip38: string, password: string, crossforger: any): Promise<void> {
        if (!bip38 && (!this.secrets || !this.secrets.length || !Array.isArray(this.secrets))) {
            this.logger.warn('No delegate found! Please check your "delegates.json" file and try again.');
            return;
        }

        this.secrets = uniq(this.secrets.map(secret => secret.trim()));
        this.delegates = this.secrets.map(passphrase => new Delegate(passphrase, this.network, password));

        if (bip38) {
            this.logger.info("BIP38 Delegate loaded");

            this.delegates.push(new Delegate(bip38, this.network, password));
        }

        if (!this.delegates) {
            this.logger.warn('No delegate found! Please check your "delegates.json" file and try again.');
            return;
        }

        if (crossforger && crossforger.enabled) {
            this.crossForge(crossforger.custodian);
        }

        let timeout: number;
        try {
            await this.loadRound();
            timeout = Crypto.Slots.getTimeInMsUntilNextSlot();
        } catch (error) {
            timeout = 2000;
            this.logger.warn("Waiting for a responsive host.");
        } finally {
            this.checkLater(timeout);
        }
    }

    public async crossForge(custodian: string): Promise<void> {
        this.logger.info(`Crossforger started with custodian: ${custodian}`);

        if(!custodian.endsWith('/')) custodian += '/';
        this.crossClient = new Connection(`${custodian}api/v2`);
        let config;
        try {
            config = (await this.crossClient.api('node').configuration()).body.data;
        } catch (e) {
            this.logger.error(`Crossforger not able to contact custodian. Stopping.`);
            return;
        }
        
        if(!config) {
            this.logger.error(`Crossforger not able to get network details. Stopping.`)
            return;
        }

        if(config.nethash == this.network.nethash) {
            this.logger.error(`Crossforger running on same network as custodian. Stopping.`)
            return;
        }

        this.scNet = {};
        this.scNet.version = config.version;
        this.scNet.activeDelegates = config.constants.activeDelegates;
        this.scNet.blocktimeMs = config.constants.blocktime * 1000;
        this.scNet.epoch = new Date(config.constants.epoch);
        this.scNet.reward = config.constants.reward;

        const timeTillNextSlot: number = 
            this.scNet.blocktimeMs - ((Date.now() - this.scNet.epoch.getTime()) % this.scNet.blocktimeMs);
        this.logger.debug(`Next sidechain slot in ${timeTillNextSlot} ms.`);

        setTimeout(() => {
            this.logger.debug(`Crossforger timing synced.`);
            this.crossForgeLoop();
        }, timeTillNextSlot)
    }

    public async crossForgeLoop(): Promise<void> {
        setTimeout(() => this.crossForgeLoop(), this.scNet.blocktimeMs);

        const start: number = Date.now();
        const chainSlot: number = Math.floor((start - this.scNet.epoch.getTime()) / this.scNet.blocktimeMs) + 1
        const roundSlot: number = ((chainSlot - 1) % this.scNet.activeDelegates) + 1;
        this.logger.debug(`Crossforger slot tick: ${roundSlot} - ${chainSlot}`);

        try {
            const currentForger = (await this.crossClient.get('delegates/round')).body[roundSlot - 1];
            this.logger.debug(`Current sidechain forger: ${currentForger.username}`);
            let idx = this.delegates.findIndex(delegate => delegate.publicKey == currentForger.publicKey);
            if (idx != -1) {
                this.logger.info(`Crossforging for ${currentForger.username}...`);
                let crossDelegate = this.delegates[idx];
                const lastScBlock = (await this.crossClient.get("blockchain")).body.data.block;

                const txs = [];
                try {
                    let res = (await this.crossClient.api("transactions").allUnconfirmed()).body.data;
                    txs.push(...res);
                } catch (e) {
                    this.logger.error("Failed to get mempool from custodian.")
                    this.logger.debug(JSON.stringify(e));
                }

                for (const tx of txs) {
                    tx.recipientId = tx.recipient;
                    tx.network = this.scNet.version; // reminder to self, this is painfully bad to have to do
                }
                this.logger.info(`Including ${txs.length} txs in block.`)

                const block: Interfaces.IBlock = crossDelegate.forge(txs, {
                    previousBlock: {
                        id: lastScBlock.id,
                        idHex: lastScBlock.id,
                        height: lastScBlock.height,
                    },
                    timestamp: Math.floor((Date.now() - this.scNet.epoch.getTime()) / 1000),
                    reward: this.scNet.reward,
                    crossforged: true
                });
                const res = await this.crossClient.post("delegates/crossforge", { body: block.serialized });
                this.logger.info(`${res.body.status}. Took ${Date.now() - start} ms.`);
            } else {
                this.logger.debug(`Not our turn.`);
            }
        } catch (e) {
            this.logger.error(`Crossforging failed: ${JSON.stringify(e)}`);
        }
    }

    public async stopForging(): Promise<void> {
        this.isStopped = true;
    }

    // @TODO: make this private
    public async checkSlot(): Promise<void> {
        try {
            if (this.isStopped) {
                return;
            }

            await this.loadRound();

            if (!this.round.canForge) {
                // basically looping until we lock at beginning of next slot
                return this.checkLater(200);
            }

            const delegate: Delegate = this.isActiveDelegate(this.round.currentForger.publicKey);

            if (!delegate) {
                if (this.isActiveDelegate(this.round.nextForger.publicKey)) {
                    const username = this.usernames[this.round.nextForger.publicKey];

                    this.logger.info(
                        `Next forging delegate ${username} (${this.round.nextForger.publicKey}) is active on this node.`,
                    );

                    await this.client.syncWithNetwork();
                }

                return this.checkLater(Crypto.Slots.getTimeInMsUntilNextSlot());
            }

            const networkState: P2P.INetworkState = await this.client.getNetworkState();

            if (networkState.nodeHeight !== this.round.lastBlock.height) {
                this.logger.warn(
                    `The NetworkState height (${networkState.nodeHeight}) and round height (${this.round.lastBlock.height}) are out of sync. This indicates delayed blocks on the network.`,
                );
            }

            if (this.isForgingAllowed(networkState, delegate)) {
                await this.forgeNewBlock(delegate, this.round, networkState);
            }

            return this.checkLater(Crypto.Slots.getTimeInMsUntilNextSlot());
        } catch (error) {
            if (error instanceof HostNoResponseError || error instanceof RelayCommunicationError) {
                if (error.message.includes("blockchain isn't ready") || error.message.includes("App is not ready.")) {
                    this.logger.info("Waiting for relay to become ready.");
                } else {
                    this.logger.warn(error.message);
                }
            } else {
                this.logger.error(error.stack);

                if (!isEmpty(this.round)) {
                    this.logger.info(
                        `Round: ${this.round.current.toLocaleString()}, height: ${this.round.lastBlock.height.toLocaleString()}`,
                    );
                }

                this.client.emitEvent(ApplicationEvents.ForgerFailed, { error: error.message });
            }

            // no idea when this will be ok, so waiting 2s before checking again
            return this.checkLater(2000);
        }
    }

    public async forgeNewBlock(
        delegate: Delegate,
        round: P2P.ICurrentRound,
        networkState: P2P.INetworkState,
    ): Promise<void> {
        Managers.configManager.setHeight(networkState.nodeHeight);

        const transactions: Interfaces.ITransactionData[] = await this.getTransactionsForForging();

        const block: Interfaces.IBlock = delegate.forge(transactions, {
            previousBlock: {
                id: networkState.lastBlockId,
                idHex: Managers.configManager.getMilestone().block.idFullSha256
                    ? networkState.lastBlockId
                    : Blocks.Block.toBytesHex(networkState.lastBlockId),
                height: networkState.nodeHeight,
            },
            timestamp: round.timestamp,
            reward: round.reward,
        });

        const minimumMs: number = 2000;
        const timeLeftInMs: number = Crypto.Slots.getTimeInMsUntilNextSlot();
        const currentSlot: number = Crypto.Slots.getSlotNumber();
        const roundSlot: number = Crypto.Slots.getSlotNumber(round.timestamp);
        const prettyName: string = `${this.usernames[delegate.publicKey]} (${delegate.publicKey})`;

        if (timeLeftInMs >= minimumMs && currentSlot === roundSlot) {
            this.logger.info(`Forged new block ${block.data.id} by delegate ${prettyName}`);

            await this.client.broadcastBlock(block);

            this.client.emitEvent(ApplicationEvents.BlockForged, block.data);

            for (const transaction of transactions) {
                this.client.emitEvent(ApplicationEvents.TransactionForged, transaction);
            }
        } else {
            if (currentSlot !== roundSlot) {
                this.logger.warn(`Failed to forge new block by delegate ${prettyName}, because already in next slot.`);
            } else {
                this.logger.warn(
                    `Failed to forge new block by delegate ${prettyName}, because there were ${timeLeftInMs}ms left in the current slot (less than ${minimumMs}ms).`,
                );
            }
        }
    }

    public async getTransactionsForForging(): Promise<Interfaces.ITransactionData[]> {
        const response: P2P.IForgingTransactions = await this.client.getTransactions();

        if (isEmpty(response)) {
            this.logger.error("Could not get unconfirmed transactions from transaction pool.");

            return [];
        }

        const transactions: Interfaces.ITransactionData[] = response.transactions.map(
            (hex: string) => Transactions.TransactionFactory.fromBytesUnsafe(Buffer.from(hex, "hex")).data,
        );

        this.logger.debug(
            `Received ${pluralize("transaction", transactions.length, true)} from the pool containing ${
                response.poolSize
            }`,
        );

        return transactions;
    }

    public isForgingAllowed(networkState: P2P.INetworkState, delegate: Delegate): boolean {
        if (networkState.status === NetworkStateStatus.Unknown) {
            this.logger.info("Failed to get network state from client. Will not forge.");
            return false;
        } else if (networkState.status === NetworkStateStatus.ColdStart) {
            this.logger.info("Skipping slot because of cold start. Will not forge.");
            return false;
        } else if (networkState.status === NetworkStateStatus.BelowMinimumPeers) {
            this.logger.info("Network reach is not sufficient to get quorum. Will not forge.");
            return false;
        }

        const overHeightBlockHeaders: Array<{
            [id: string]: any;
        }> = networkState.getOverHeightBlockHeaders();
        if (overHeightBlockHeaders.length > 0) {
            this.logger.info(
                `Detected ${pluralize("distinct overheight block header", overHeightBlockHeaders.length, true)}.`,
            );

            for (const overHeightBlockHeader of overHeightBlockHeaders) {
                if (overHeightBlockHeader.generatorPublicKey === delegate.publicKey) {
                    const username: string = this.usernames[delegate.publicKey];

                    this.logger.warn(
                        `Possible double forging delegate: ${username} (${delegate.publicKey}) - Block: ${overHeightBlockHeader.id}.`,
                    );
                }
            }
        }

        if (networkState.getQuorum() < 0.66) {
            this.logger.info("Fork 6 - Not enough quorum to forge next block. Will not forge.");
            this.logger.debug(`Network State: ${networkState.toJson()}`);

            return false;
        }

        return true;
    }

    private isActiveDelegate(publicKey: string): Delegate | undefined {
        return this.delegates.find(delegate => delegate.publicKey === publicKey);
    }

    private async loadRound(): Promise<void> {
        this.round = await this.client.getRound();

        this.usernames = this.round.delegates
            .map(delegate => Object.assign(new Wallets.Wallet(delegate.address), delegate))
            .reduce(
                (acc, delegate) =>
                    Object.assign(acc, { [delegate.publicKey]: delegate.getAttribute("delegate.username") }),
                {},
            );

        if (!this.initialized) {
            this.printLoadedDelegates();

            this.client.emitEvent(ApplicationEvents.ForgerStarted, {
                activeDelegates: this.delegates.map(delegate => delegate.publicKey),
            });

            this.logger.info(`Forger Manager started.`);
        }

        this.initialized = true;
    }

    private checkLater(timeout: number): void {
        setTimeout(() => this.checkSlot(), timeout);
    }

    private printLoadedDelegates(): void {
        const activeDelegates: Delegate[] = this.delegates.filter(delegate =>
            this.usernames.hasOwnProperty(delegate.publicKey),
        );

        if (activeDelegates.length > 0) {
            this.logger.info(
                `Loaded ${pluralize("active delegate", activeDelegates.length, true)}: ${activeDelegates
                    .map(({ publicKey }) => `${this.usernames[publicKey]} (${publicKey})`)
                    .join(", ")}`,
            );
        }

        if (this.delegates.length > activeDelegates.length) {
            const inactiveDelegates: string[] = this.delegates
                .filter(delegate => !activeDelegates.includes(delegate))
                .map(delegate => delegate.publicKey);

            this.logger.info(
                `Loaded ${pluralize("inactive delegate", inactiveDelegates.length, true)}: ${inactiveDelegates.join(
                    ", ",
                )}`,
            );
        }
    }
}
