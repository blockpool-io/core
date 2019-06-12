module.exports = {
    "@blockpool-io/core-event-emitter": {},
    "@blockpool-io/core-logger-pino": {},
    "@blockpool-io/core-database-postgres": {
        connection: {
            host: process.env.CORE_DB_HOST || "localhost",
            port: process.env.CORE_DB_PORT || 5432,
            database: process.env.CORE_DB_DATABASE || `${process.env.CORE_TOKEN}_unitnet`,
            user: process.env.CORE_DB_USERNAME || process.env.CORE_TOKEN,
            password: process.env.CORE_DB_PASSWORD || "password",
        },
    },
    "@blockpool-io/core-transaction-pool": {
        enabled: !process.env.CORE_TRANSACTION_POOL_DISABLED,
        maxTransactionsPerSender: process.env.CORE_TRANSACTION_POOL_MAX_PER_SENDER || 300,
        allowedSenders: [],
        // 100+ years in the future to avoid our hardcoded transactions used in the
        // tests to expire immediately
        maxTransactionAge: 4036608000,
        dynamicFees: {
            minFeePool: 1000,
            minFeeBroadcast: 1000,
        },
    },
    "@blockpool-io/core-p2p": {
        host: process.env.CORE_P2P_HOST || "0.0.0.0",
        port: process.env.CORE_P2P_PORT || 4000,
        minimumVersions: [">=2.0.0"],
        minimumNetworkReach: 5,
        coldStart: 5,
    },
    "@blockpool-io/core-blockchain": {},
    "@blockpool-io/core-api": {
        enabled: !process.env.CORE_API_DISABLED,
        host: process.env.CORE_API_HOST || "0.0.0.0",
        port: process.env.CORE_API_PORT || 4003,
        whitelist: ["*"],
    },
    "@blockpool-io/core-webhooks": {
        enabled: process.env.CORE_WEBHOOKS_ENABLED,
        server: {
            host: process.env.CORE_WEBHOOKS_HOST || "0.0.0.0",
            port: process.env.CORE_WEBHOOKS_PORT || 4004,
            whitelist: ["127.0.0.1", "::ffff:127.0.0.1"],
        },
    },
    "@blockpool-io/core-forger": {
        hosts: [`http://127.0.0.1:${process.env.CORE_P2P_PORT || 4000}`],
    },
    "@blockpool-io/core-json-rpc": {
        enabled: process.env.CORE_JSON_RPC_ENABLED,
        host: process.env.CORE_JSON_RPC_HOST || "0.0.0.0",
        port: process.env.CORE_JSON_RPC_PORT || 8080,
        allowRemote: false,
        whitelist: ["127.0.0.1", "::ffff:127.0.0.1"],
    },
};
