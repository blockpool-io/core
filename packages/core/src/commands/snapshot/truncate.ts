import { app } from "@blockpool-io/core-container";
import { SnapshotManager } from "@blockpool-io/core-snapshots";
import { setUpLite } from "../../helpers/snapshot";
import { BaseCommand } from "../command";

export class TruncateCommand extends BaseCommand {
    public static description: string = "truncate blockchain database";

    public async run(): Promise<void> {
        const { flags, paths } = await this.parseWithNetwork(TruncateCommand);

        this.abortRunningProcess(`${flags.token}-core`);
        this.abortRunningProcess(`${flags.token}-forger`);
        this.abortRunningProcess(`${flags.token}-relay`);

        await setUpLite(flags, paths);

        if (!app.has("snapshots")) {
            this.error("The @blockpool-io/core-snapshots plugin is not installed.");
        }

        await app.resolvePlugin<SnapshotManager>("snapshots").truncate();
    }
}
