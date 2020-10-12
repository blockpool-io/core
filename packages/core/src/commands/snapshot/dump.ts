import { app } from "@blockpool-io/core-container";
import { SnapshotManager } from "@blockpool-io/core-snapshots";
import { flags } from "@oclif/command";
import { setUpLite } from "../../helpers/snapshot";
import { CommandFlags } from "../../types";
import { BaseCommand } from "../command";

export class DumpCommand extends BaseCommand {
    public static description: string = "create a full snapshot of the database";

    public static flags: CommandFlags = {
        ...BaseCommand.flagsSnapshot,
        blocks: flags.string({
            description: "blocks to append to, correlates to folder name",
        }),
        start: flags.integer({
            description: "start network height to export",
            default: -1,
        }),
        end: flags.integer({
            description: "end network height to export",
            default: -1,
        }),
    };

    public async run(): Promise<void> {
        const { flags, paths } = await this.parseWithNetwork(DumpCommand);

        this.abortRunningProcess(`${flags.token}-core`);
        this.abortRunningProcess(`${flags.token}-forger`);
        this.abortRunningProcess(`${flags.token}-relay`);

        await setUpLite(flags, paths);

        if (!app.has("snapshots")) {
            this.error("The @blockpool-io/core-snapshots plugin is not installed.");
        }

        await app.resolvePlugin<SnapshotManager>("snapshots").dump(flags);
    }
}
