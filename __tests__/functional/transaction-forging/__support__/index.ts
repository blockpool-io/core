import "jest-extended";

import { bignumify } from "@blockpool-io/core-utils";
import { configManager, PublicKey } from "@blockpool-io/crypto";
import delay from "delay";
import { RestClient } from "../../../helpers";
import { secrets } from "../../../utils/config/testnet/delegates.json";
import { setUpContainer } from "../../../utils/helpers/container";

jest.setTimeout(1200000);

let app;
export async function setUp() {
    app = await setUpContainer({
        include: [
            "@blockpool-io/core-event-emitter",
            "@blockpool-io/core-logger-pino",
            "@blockpool-io/core-database-postgres",
            "@blockpool-io/core-transaction-pool",
            "@blockpool-io/core-p2p",
            "@blockpool-io/core-blockchain",
            "@blockpool-io/core-api",
            "@blockpool-io/core-forger",
        ],
    });

    const databaseService = app.resolvePlugin("database");
    await databaseService.reset();
    await databaseService.buildWallets();
    await databaseService.saveRound(
        secrets.map(secret => ({
            round: 1,
            publicKey: PublicKey.fromPassphrase(secret),
            voteBalance: bignumify("245098000000000"),
        })),
    );
}

export async function tearDown() {
    await app.tearDown();
}

export async function snoozeForBlock(sleep: number = 0, height: number = 1) {
    const blockTime = configManager.getMilestone(height).blocktime * 1000;
    const sleepTime = sleep * 1000;

    return delay(blockTime + sleepTime);
}

export async function expectAcceptAndBroadcast(transactions, id): Promise<void> {
    const { body } = await RestClient.broadcast(transactions);

    if (body.data.invalid.length) {
        console.log(body.errors);
    }

    expect(body.data.accept).toContain(id);
    expect(body.data.broadcast).toContain(id);
}

export async function expectTransactionForged(id): Promise<void> {
    const { body } = await RestClient.get(`transactions/${id}`);

    expect(body.data.id).toBe(id);
}

export const passphrases = {
    passphrase: "this is top secret passphrase number 1",
    secondPassphrase: "this is top secret passphrase number 2",
};
