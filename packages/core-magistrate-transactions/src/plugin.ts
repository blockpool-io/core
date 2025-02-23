import { ApplicationEvents } from "@blockpool-io/core-event-emitter";
import { Container, Database, EventEmitter, Logger } from "@blockpool-io/core-interfaces";
import { Handlers } from "@blockpool-io/core-transactions";
import { defaults } from "./defaults";
import {
    BridgechainRegistrationTransactionHandler,
    BridgechainResignationTransactionHandler,
    BridgechainUpdateTransactionHandler,
    BusinessRegistrationTransactionHandler,
    BusinessResignationTransactionHandler,
    BusinessUpdateTransactionHandler,
} from "./handlers";
import { EntityTransactionHandler } from "./handlers/entity";
import { businessIndexer, entityIndexer, MagistrateIndex } from "./wallet-manager";

export const plugin: Container.IPluginDescriptor = {
    pkg: require("../package.json"),
    defaults,
    required: true,
    alias: "core-magistrate-transactions",
    async register(container: Container.IContainer, options) {
        const logger = container.resolvePlugin<Logger.ILogger>("logger");
        logger.info("Setting up core-magistrate-transactions.");

        container
            .resolvePlugin<EventEmitter.EventEmitter>("event-emitter")
            .once(ApplicationEvents.StateStarting, (database: Database.IDatabaseService) => {
                const walletManager = database.walletManager;
                walletManager.registerIndex(MagistrateIndex.Businesses, businessIndexer);
                walletManager.registerIndex(MagistrateIndex.Entities, entityIndexer);
            });

        Handlers.Registry.registerTransactionHandler(BusinessRegistrationTransactionHandler);
        Handlers.Registry.registerTransactionHandler(BusinessResignationTransactionHandler);
        Handlers.Registry.registerTransactionHandler(BusinessUpdateTransactionHandler);
        Handlers.Registry.registerTransactionHandler(BridgechainRegistrationTransactionHandler);
        Handlers.Registry.registerTransactionHandler(BridgechainResignationTransactionHandler);
        Handlers.Registry.registerTransactionHandler(BridgechainUpdateTransactionHandler);
        Handlers.Registry.registerTransactionHandler(EntityTransactionHandler);
    },

    // tslint:disable-next-line: no-empty
    async deregister(container: Container.IContainer, options) {},
};
