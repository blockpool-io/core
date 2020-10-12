module.exports = {
    "@blockpool-io/core-event-emitter": {},
    "@blockpool-io/core-logger-pino": {},
    "@blockpool-io/core-p2p": {
        server: {
            port: process.env.CORE_P2P_PORT || 4000,
        },
        minimumNetworkReach: 3,
    },
    "@blockpool-io/core-state": {},
    "@blockpool-io/core-magistrate-transactions": {},
    "@blockpool-io/core-database-postgres": {
        connection: {
            host: process.env.CORE_DB_HOST || "localhost",
            port: process.env.CORE_DB_PORT || 5432,
            database: process.env.CORE_DB_DATABASE || `${process.env.CORE_TOKEN}_${process.env.CORE_NETWORK_NAME}`,
            user: process.env.CORE_DB_USERNAME || process.env.CORE_TOKEN,
            password: process.env.CORE_DB_PASSWORD || "password",
        },
    },
    "@blockpool-io/core-transaction-pool": {
        enabled: true,
        maxTransactionsPerSender: process.env.CORE_TRANSACTION_POOL_MAX_PER_SENDER || 300,
        allowedSenders: [],
        dynamicFees: {
            enabled: true,
            minFeePool: 1000,
            minFeeBroadcast: 1000,
            addonBytes: {
                transfer: 100,
                secondSignature: 250,
                delegateRegistration: 400000,
                vote: 100,
                multiSignature: 500,
                ipfs: 250,
                multiPayment: 500,
                delegateResignation: 100,
                htlcLock: 100,
                htlcClaim: 0,
                htlcRefund: 0
            },
        },
    },
    "@blockpool-io/core-blockchain": {},
    "@blockpool-io/core-api": {
        enabled: !process.env.CORE_API_DISABLED,
        host: process.env.CORE_API_HOST || "0.0.0.0",
        port: process.env.CORE_API_PORT || 4003,
    },
    "@blockpool-io/core-wallet-api": {},
    "@blockpool-io/core-webhooks": {
        enabled: process.env.CORE_WEBHOOKS_ENABLED,
        server: {
            host: process.env.CORE_WEBHOOKS_HOST || "0.0.0.0",
            port: process.env.CORE_WEBHOOKS_PORT || 4004,
            whitelist: ["127.0.0.1", "::ffff:127.0.0.1"],
        },
    },
    "@blockpool-io/core-forger": {},
    "@blockpool-io/core-exchange-json-rpc": {
        enabled: process.env.CORE_EXCHANGE_JSON_RPC_ENABLED,
        host: process.env.CORE_EXCHANGE_JSON_RPC_HOST || "0.0.0.0",
        port: process.env.CORE_EXCHANGE_JSON_RPC_PORT || 8080,
        allowRemote: false,
        whitelist: ["127.0.0.1", "::ffff:127.0.0.1"],
    },
    "@blockpool-io/core-snapshots": {},
};
