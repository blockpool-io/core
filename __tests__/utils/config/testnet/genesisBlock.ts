import { Utils } from "@blockpool-io/crypto";

export const genesisBlock = {
    version: 0,
    totalAmount: Utils.BigNumber.make(12500000000000000),
    totalFee: Utils.BigNumber.make(0),
    reward: Utils.BigNumber.make(0),
    payloadHash: "d9acd04bde4234a81addb8482333b4ac906bed7be5a9970ce8ada428bd083192",
    timestamp: 0,
    numberOfTransactions: 153,
    payloadLength: 35960,
    // tslint:disable-next-line: no-null-keyword
    previousBlock: null,
    generatorPublicKey: "03b47f6b6719c76bad46a302d9cff7be9b1c2b2a20602a0d880f139b5b8901f068",
    transactions: [
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AHXtmB84sTZ9Zd35h9Y1vfFvPE2Xzqj8ri",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "304402205fcb0677e06bde7aac3dc776665615f4b93ef8c3ed0fddecef9900e74fcb00f302206958a0c9868ea1b1f3d151bdfa92da1ce24de0b1fcd91933e64fb7971e92f48d",
            id: "db1aa687737858cc9199bfa336f9b1c035915c30aaee60b1e0f8afadfdb946bd",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AZFEPTWnn2Sn8wDZgCRF8ohwKkrmk2AZi1",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3045022100ffff4e9ba62e5e3beb37deee052824da83c4030925bce09f190151652d0669b8022056a432e56a2e1b026d4b54f6c34ce88a0c9cebdccc730659c03449fe878c66f8",
            id: "0762007f825f02979a883396839d6f7425d5ab18f4b8c266bebe60212c793c6d",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AJjv7WztjJNYHrLAeveG5NgHWp6699ZJwD",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3044022001a6326e5d1eb06d0ba1fa39446bd6d56ea45f0c269ebbce5dfc6a649277cfcc02203b252d3a6ef2b22349d9d0a9110ce28a199c39dc8b911edfa82c297a02009d07",
            id: "3c39aca95ad807ce19c0325e3059d7b1cf967751c6929035214a4ef320fb8154",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "ARAibxGqLQJTo1bWMJfu5fCc88rdWWjqgv",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "304502210084d855eddfe616cf1dc238b19226c7959c2fc4027ae2e8aea6fd8e9eb8928e6b0220440f980e40c1c56348782fd69d49a96944df7ee5b68d18028600e0e7501d4000",
            id: "9fdf6ae86f7c005b3b7dc1b9fb6411219407ecaa93adff85fdb61710f5121638",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "ASEJEDLfTxy6upQDWTuYucoVwMUcmhSGhp",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "304402205438b8b9058bbde5d30794e7681e400e52b5fbd22324c5b6b521f97bc8b8aabc022000fe04d7afbd2e668b1d4576988ed596dc92251e33efebc081e2cba14ad5a898",
            id: "1d7c68087c875d7ce555b2c3e71e1d91a1ad62d0c2497efe3cab91415e634041",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "APRiwbs17FdbaF8DYU9js2jChRehQc2e6P",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3045022100b2e634a95b011a68489870f003e4bac4a4f0578bfdc6b9f645c934016c2c0463022022cd4ebf276dd627d98be4b697bae2df10b86d94e984da2eb7e011b08d6dffd2",
            id: "0c993e115ba26981b0be9d22e7c4a13b0f106e0cb472f9d34eabfc8e414dd528",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AdXbS4GKvV6TZVHrNzcYSQKfpenQnFGTxK",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3045022100f965e5c280acb22d1cde405223fe9a6fcb765844adbc5321b17a268924e1f597022043d31b1edc5fe0cf60a960d84e3528472cdf34560c9463979043a409f37e7f29",
            id: "c279f2eb1f9e6e7d4b0ba7a98233a0f1a2536231976c99f56f64b248eb06a0c1",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "Ac9dCo9dFgAkkBdEBsoRAN4Mm6xMsgYdZx",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "30440220715463c316a75959dbfb6a59a013fbf914bef1ff739ac8000d49dabbf5118df9022019345ae1c34173dc214bae82f3cfbf438092f0fd2d277acafe3e9deb644b1a3b",
            id: "7e2fc9ecf23e909a3d0fbecd615445a0eed8c2cef18e01b1492d63f616f5d87d",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AReCSCQRssLGF4XyhTjxhQm6mBFAWTaDTz",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3045022100fdd8aff26dceeb5abb6e5e8a8f468c8ac1997a587225298e3d8135d57dadf4dc022072ab80a81b301a162ed5cfa67d213d5a3980185088632f5f592351aff8aa0e9c",
            id: "511c0e1076104743f98932f8e7720bdb3f1539134edadd331914fd9ece1ebede",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AV6GP5qhhsZG6MHb4gShy22doUnVjEKHcN",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "30440220635e04ce278870f17fcd1883aa26c568e63dfbdd302add39aa30fd3637c79c2c02206fdd9e7b1f4d238a97d26ef1758927e2d39f121687490f2bd79831e36afdd43b",
            id: "0768d5016c53d884e3d68a09d1bab0d730b7067c71ef4ca1c4d61b3815f5ff66",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AdWRsk7Lbo97jxGBKzLAFwevVHbqVbW1Cj",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "304402200b1dac57ca6565ac31afb99686f2e0f0e8dc219b9860b295ca5444a1663cecfb02205787393561fe407449af4aaf2f621db9e4d3f11c7438666cd694d495c0a0c41f",
            id: "1aeb50080ea118165e5041f7a897974c2ed1ebde08add85dc78cc7cf73566a91",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AaUgne8txmQB1iBboiFVLVHwLaYChZiFVA",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "304502210098dea25eccf31ce6f874a9528578805aaf07be8b41f1571865793f9e3e6e3c97022033ae9c73dad44c01fe6362665fccf63bb1a0ae8e26f77a1cf60b67dc96b05343",
            id: "254f0f4fa277cc651a746d6ac371eb27afc3ea155ba060552dd26b8e83d17b72",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AG8kwwk4TsYfA2HdwaWBVAJQBj6VhdcpMo",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "304402207f4bf346aac501e766156818089fb16905a9bdca69ff6d5a55ba918a08afc7ab02200ec2c25cc4bb30e2c176d55630d8e2679b899c14ab4ba43c3d62955dd940425b",
            id: "e5ebb02e8e8a6708e22ee5ef99fe1dd8b6eea1095be6b772aa21bf63cf7ade5a",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AFyf2qVpX2JbpKcy29XbusedCpFDeYFX8Q",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3045022100a0bbc15bdad648bb9b439f1d34b12b853442d1cfd4ce7f569905082801fa58e8022036b4e73edf7ab7226f8007233f77b1d497cb6b4736f02721bf1b399312ebe114",
            id: "8a686b21477b64dfd85f08f8598a0f121ca1c7d65ccaca9e42326c75fb5f3abb",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AW8n3yvSAqUJkyfcG5u3bgRxsNKzXYPamN",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "304402205d77dfcde527dcc6669bcb01c27b92c1a6399e35ebac9e69415645f596ab1d2802204179497bfd952f44d5f9e295b2a3219a290a4a82841c084a18553b7712e26415",
            id: "21175347e2acfabc09a7593aae0682e39fe7152199a90561c11125f525211243",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AZuvQC5WuVpPE9jwMCJcA28X5e7Ni32WY2",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3045022100cf77c16df9185727ff717b71a94f8b29ceeae1e5bb3a28da8cef9df5bc63b7c202207bca394ce9ebd344a548e5a5697f672dedbef640dc1f9105f7c063287bcd1840",
            id: "ce1d9b7377551f36568127f5b635b5443f5a58abba6566b50a8d4d7b53c8a874",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AHysG9CfbXvHtxev9eziTK8WUbnFKKLFR8",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3045022100eb8daebb5484f3b0a738c9344fb28298c596f9486963f8fe36e2501ee6876f2a0220559df66986dc9a9a8e76982ef85f907c62745757990c69f0b17b6ae5a7ca4719",
            id: "b56702f5eddad0d8dbbb33b6b1ca3e07e4740def9c5dd2aaed9a70b90a4e31b7",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AMfyf9iRjXiKNcLQVTUE9oCESUPzmQ6iUT",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3045022100d088e9bcd78978f2d67e7c7bccecfb73ddd0d1a2dad5b039390812320355722d02207affe83d815f04f6b11abf98eebe0488bfb87f8cd6513d44b829008ed1c15ceb",
            id: "a73c053c42e83a83498cf58e5b077b31443e265ddf8228081cb17a36bba366ae",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "ANRNMPjQjJGVsVbyeqwShcxKTidYJ2S1Hm",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3045022100db16a8e9682f07efb607bc7c75b654646ff449761ed146ab9358e69d29fadd7f0220436554ad78db0e04ae5b573258e2c8067848e89b55a6e8e1e25011a43882a643",
            id: "2dccb8b44ad2e598673628fd9d74e336b467a0c941d5e257dceb85c8e0a0000c",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AH39inbLsUBhC3k29NcvQP3zKZWnsQksvA",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3045022100b03738eccce8ad0b8ac0a656119c2cdd202089c5650d8e1486bd13eb9c3158980220059079900c7fdc16e799c50dccc074726fbf0068044462faabdf1e73f9f9bc38",
            id: "b2cce30021d139f97925807da796722bf4d5459442523823388c259ca5ad73db",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "ASqzCDRS5cTBwCmC5moQ34W4QZhtrj4pT1",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3045022100becb49fe5edd6806d5ba6eddbbb34ca8eaf3a12dba123d1610b2b120ca8bd017022072972992ee0ca0f319ae754a2a5a10d715a08b23f8239f9d6d59774f790543ea",
            id: "9e4841f43ab355be7a4f93b09f3d82c17065fbe25387dd6c5eb4e2692ea05b0b",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AeooqGMJPE5UWRPkKW6kgLGZu3898vcLPV",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "304402207f1a3fe8c5aa7a77a58ed35c34f128b5df6fba89aa918af35eff432be7d1f8e00220460d4f2a457e1a477974157e33bf2974de6588d56e59729ae980720e9794827a",
            id: "2c7ca823be21724a4876de632dded3b9afca45df357819ed028488128d85d29e",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AWHGbGaz5FgvyChuAfWFmKY2LsbcwqPYL9",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3044022067266dfe9d8f2550b590e1eae2f73d28c6b80fecb24c3eb1b4539bc864b3b4f4022031e5122145c35874c0c48673d088e76fb3e11c308ffe9d5dee6431d3441d627e",
            id: "a91119f04e2201184761f7fdcb26e4aa81c7e1076cb11a58a422d351241d4e4a",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AWtD9W5LCv2TH3VcdzbGQBGaJBwvbzZNDQ",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3045022100b970ec89927de0cb7805e614a742d42c2967db5a9c68d0892956dc89d68ca7d1022067fa30265dd2e1a2985980be2bf876748a7a8c7f3cde0382265b601fa658dc17",
            id: "94955e6bac6269fbd19e92d2292ac947225fc6f68c6216001b528596a961040c",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AJPicaX6vmokoK3x8abBMDpi8GMPc7rLiW",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "304402203671b82ddf8a824b8e5aac8bc28be4aef1c00aca1097d14ec1a55003d7a3f28d02203aacb6e7517e916478432b81399828ba7425183ce0fc43feb361bcf345fb0519",
            id: "df563ee9822bd3d7aada600d4800952743ec64fafdc7697428d7a19a60745885",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AbfQq8iRSf9TFQRzQWo33dHYU7HFMS17Zd",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3045022100b77653317c93eb20ee19c71e64a7f9ecb985351bfb1fe351ac65a5738cb37ae202203d540395e1d55f87caaaa867afbfbaf98c553be0b4c7d1748418a76b0c258c89",
            id: "d21b6341e2b4be5ffdc3dd8fbcdf2c576ba02e2ef4ab5eab0e4bfc9da4e9e442",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AQBo4exLwyapRiDoDteh1fF2ctWWdxofSf",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3044022046239e39062a58925099b005888355b8cd6700af66972bf509a10123f9abdec60220202321ea74e56177606fc079d19c29851d832e6d00c93985ffbec3dba6f0d675",
            id: "df6bc7a17ad34f8e9faaa2646e8e5dd8bca35affba352537184f690e200e17b6",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "ARMEiPQE55CfHfR8WmosiFykTAPGYUyYJv",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "304402204eeab87f7ecc2097b85606b986177964f3ae777535f6fc0cf08a55fec587d87602203779d59903b8de63511e4ed0a7967bd85e9cb1fc9d84bbc5091e3caa87d8bd52",
            id: "5f0d5f0dff464d0ad587da5bc93e600a8e2657d359d0a1224bdd4ccc3b6f376a",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "ALHDQyTm7wALtwjmKwEejZjq7f6u6w5xCv",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "304402200a2b9d0f61066fa00a2a2882379aa8ee60e949bdc2a85103bbbb69ce3eafccd9022057364f349faceb3047fa95ada210c64fc4a81978d66925b37d3dbc21ede885af",
            id: "1b39e3702576e6ad7775e34d53e43210549d52a56b3f246031e6ba4121a66bf0",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AcmXmomxpP8NahbbFivq32QmLuKFkTkqRg",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "304502210099e568d3d0c1b48410e0b85c74d04234dacfb2fdf2b1d4b51fca1cfb3445347a02207a2509645aae54560762a37422b66ba4b3ee1c42de35d58c36d2f9d8fdea11b4",
            id: "0f21e53dbb1edb1cfb4c31bb675aa4672b452a03ec363a2b3300a9dda49e3be3",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "Aa3mWTMFTXeTJukUgpeihQLBYDHBzdpWZX",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3044022026cc5f2b588a86241badca73cd9c1686916d516b8c6c397c66a9d5bb6b5d4cd402204ab5a8c8589ee954bda4a116999d2a0e4ab0e3e96f0c7fe131d7c57b9a1ede43",
            id: "410826c255a23a78ac5c3aa10dd48132693bc955845af16c20d9c6f69b05dfe9",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AGqSC7M137ctKtkAjd3J1haCEWNfayXnuJ",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "304402205fedd8d3b5c8d69cdd7db5ca8e9e7c5004f6ba751e45eb1b85b26d9e89800a2402202be56bb2cd824bccf325b6b11432bf6d0ddb5ec97fcc121839ac2ebf884c7173",
            id: "ddb57d8270b2b6c876191c1e1c5974388b9fb3ae0980cb2245d8a7c426237f47",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AcATpmcMU1tmLDX7TzR3wXop4tfLFR21Lf",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3044022053cd42ad147eea33801b2b57388b33f633b4bfe2ad902190e12480522250d07802203066dc0d0c2ffacc4c74cca1e0187fbea1cef7e78a78666d2ec7e4e87ef546eb",
            id: "29e1aedf98935c369946c8dadb2d6784f9ab5ce8d73b9b4de2466c7757e2557b",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AZeX3qaqdU8iCebAKYoLMR2QkiuG5CffgU",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3045022100c10448b87e7176735c8ddfc8fb3c4d5d55c2d71d18b7ce3ab321209ec299fd41022013517a09e4b366ab386698286ec7bb20410bdfb7f6674fab25a739259083b297",
            id: "4cf04852529b5525f22cc540790e36e61ed36045ad1b5b788f61ebe42637391e",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AcFWyJRk5sRKagThYhk5e1jdkx3wzhL5cW",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "304402204cc1588b204ebc0c20f44a31ce53d15ab5e4d1f9c103c02dd4e4eaa1c33630b40220194b6e427b6def0783461cd8d765f97b105d048942be468be2ee9b0a2785d2ac",
            id: "35c6bc3f0799d9c79efc6515f232c58be0d03a3a797d066cba879eef4afaae2c",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AdT9FrWUksf99Lhkr9JGb8f2HLSg14kTqr",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3045022100be44f7ea12e2ee89245fb474643ec6c2c75afa00276826a4ecd6fca4cad5ff30022071a2c083b353a821345e4bbf74d98db0760b8721856572572cc3436ebdb8f08c",
            id: "45f75a349f3b4d73434c0f2ac9c291d5d07278b79e6eaa0d38d6e005f66c4783",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AJQuCRxeJpzkoGSBMXtmuRMYg9mtCb4qHf",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "304402202090f506e8f18fde70b87a3fd6c470a23e9e262f20ec6268dd59b6362e51a29202202b838c598b33c6317c998dc179fad2b660b8a72bfaf8223d7cc82414ab4c6af4",
            id: "a8d9034d1091a4dbe595647ad5f64ca8b243e7842301aee48f7eaf8b8ae98119",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AJRf2oWusRmm8QEiZuwvMg3qLbMxpd7BJ2",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3045022100be59b689a48e198267305f1ae7e116f69f7c360857ea0b1fa81db122278cad69022033436d24ec0103674522f0c559e2357f8696bd498deccad2e0f66b2cf7469538",
            id: "061cb438ba1216cfd5a0f268ce18e6f280557bc944d9aed3655e2bc5f08bdf51",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AWdRZPxQQvG1TP6hdxvQCn2t3skerq9Ky9",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "304402203b5d2aa7c4554d6d2dd6723043350df0199e6e7bbd9f21a1a20dbba8c63918cc022014a78064c5f9c5e2f43d3be36de2b5e2f17e9af557bb6c75e8d82d9f725d0188",
            id: "239f0640ddc3170a737ef349c07cb82b2493d207421b6f71b6b3dab856f16088",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "ALJVm7EYiMtc1JJDG6BupFw3ttRR6Yewej",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3044022005eb29ad4cf79fd4f6898de19459e15cc816acb0975e53530a202e69c29d0d4a0220686cf6e0c14779d6d68dcb9d16358c0e859094d2eec8083598b7bb5869478bf2",
            id: "25d8eef755cfee7cab0d7f9fbbea0fad6d5f906c432d997ae8ef1c49d23735f5",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AJv5ZFmu6fuugsdTZNi6ukPgptbCmdW4AW",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3045022100b93096a287d59545fa3a08593dfc740d9d47f3cfa3c4bd3c8ff8ef53d3a2e957022027eda62e47220774cf799f46916195e5a8b30015c56ceff4f4a1c10a918e3675",
            id: "aac25996e3be809ee88996b6b4063e2097d6306e77a067de8ebc8d7076a28d43",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "ALs933qA9Cm3caRDei4ZXxnzXexpXNem8U",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3044022017282aa4fac7b18e834abc3ca37b2f60cf989c26b12e2f2398a66cb907015a760220428218d39db812a22cc138acc7d5d4d2d5713f0546751c02d2c3fabecca0e724",
            id: "b040f86b75750b49c83ca7eb8f2a458f16b44789796ff306c5f942ca5f19164d",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "Aa4M1zL3a74L51f1AvEsLmBTsKLKrkRScU",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "304402205970d53cb0921a62bbef540dc33189b2313f3574e44f046097067e6991d63b1102200a356c87642cc781df661a1fee21cce354a144463d37053280e000e1b75da7a5",
            id: "25ce96f951d7b7d886ef487331125b3413f655f9c5ee7fb4691a728c3cbce18f",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AMv3iLrvyvpi6d4wEfLqX8kzMxaRvxAcHT",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3045022100aab0201c9d9a9641c11605d32353685cbaa051ecc276da1e6a3b309be9f20cf7022067aecbc7329bdf1770974e317a1243815511efa8c7af7801217a83c96d86eb0e",
            id: "285143b8b19cbde7c680b0f62ef51293e8f315c823ffbd97608c38c02045d831",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AX1M38eZC6TB1mzz33PxZBYBGrmE2zPdFK",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3045022100dc7752f6f8acaa3a1ee2ed1bed306ee04556b3866db92a1e770c4b970c7a932e02202d137b312342f9d0708704833b26b6611d0464c87df97049ad8b616483e9d1f8",
            id: "87b06fccbb63809e976b3405cccec2eeaa3694d5510203f04c0e60bb6c2c0020",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "ALiMCXj25VkGEAbj5PNbNez5NagZZJxLsy",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "304402205ccad5c77ea339f5e3f2b7900b4b1c409d3c8204273e89b6401314fb61f0d224022026a63fef86356de64fe571ff8488a951dcacab56e980fc044ef9f43b9d37439c",
            id: "5597ed52e4123756bea9307c09c916ff9d0f9fbce8d2e9a3a2ff719a87ad0966",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AeenH7EKK4Fo8Ebotorr9NrVfudukkXhof",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "304402207c91153f820f34228bec62772e0d78876bd3277912eacd866fe35b5c86a316c80220104529c6f786cb387ec1e3d5826271c837f0d0a6d0fa5731b9a5c6663cce7108",
            id: "d46fde78608fcc668246cc35336210b3c167ba55c82e91b0fd99df7e36872130",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "ARJWp8VJEieDA8h8YDiHq5LqU9vWcpWGG9",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3045022100acc0cf119c18861d3683bb3b0f6e209f2d62acfdd958f86dfbd35137ada814320220448f6f8adcd46204629b45a4a06f5dc7ccb4dbc2a1d702e107d91053847adf2f",
            id: "aa92faf5d80459b4e058dc8a8212608b589925052e22148384835ab687a4e875",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AU8hpb5QKJXBx6QhAzy3CJJR69pPfdvp5t",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "3044022055b6bbde5fa886db3cf1224a59f1fb43e850e2d9237db593368e1043698fe2c30220067dd20195e794af4152f1ff9e3ae4261698a86c54803ba1890bf176d97844d4",
            id: "432e67db0d5fc8c66376aa96c7324e5a1e6d00a415a9c8898b5e3bf25d8b083d",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245098000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "AHXuTrYMxsdSvYJvRoBkM3kH8pS4QSq9i7",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "30450221009d6f38067264df8497d6888e4a8c316ec58ceba8a54c39ccb0ce261d114fbbab02200fae3f2f950f5c5e3387679f8ca341ec70cd90d0e32a30112f03cfb12cd9fc23",
            id: "9321e1b08faa544f592ad8dc7b60ff1cf845efcd28fedf8b445be3bda60434cb",
        },
        {
            type: 0,
            amount: Utils.BigNumber.make(245100000000000),
            fee: Utils.BigNumber.make(0),
            recipientId: "ANBkoGqWeTSiaEVgVzSKZd3jS7UWzv9PSo",
            timestamp: 0,
            asset: {},
            senderPublicKey: "035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
            signature:
                "304402200aed5a4102bdafda00fda575294f149b393a798c510af8ba877b8c2d7ec8051e022004f7487c4f728c633aee5baa62ab0017f4b91cf2f494eb1c4cc9addc3e9155da",
            id: "0bbc9340798a18a81109bdfdbee9c9003f20a586dd9f80a39507c84588c1b4b1",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "0377f81a18d25d77b100cb17e829a72259f08334d064f6c887298917a04df8f647",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_9",
                    publicKey: "0377f81a18d25d77b100cb17e829a72259f08334d064f6c887298917a04df8f647",
                },
            },
            signature:
                "30440220072124721ba7c997f7c29ad3d4819515fae7a67be2bc395cb73f114eb8d4abe60220523ac295e114de30ce8a4300f4670db91ad2abe1268460e6ad3463fbe9834b84",
            id: "d2e70f9d2de57240571905aa81db0b6883e27a83be2422530722d76b56e63ecd",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "02ad799c6bd670746892bd4331e1aebada26a2cc3ccaf0fde1e94942b20066b05a",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_18",
                    publicKey: "02ad799c6bd670746892bd4331e1aebada26a2cc3ccaf0fde1e94942b20066b05a",
                },
            },
            signature:
                "304402204b93b06e08e71e3317f9426a1d3d450d6293fdbf5a6b3043fce27b3ce65431e20220683609720ea1d7d921238ca8b5098d3d9c0caab7b1e26efe42a6aebbc095471a",
            id: "8695bcb906f5fd81d858794f7d90447aadaa38418d312e33115a81e856b34d12",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "036f612457adc81041662e664ca4ae64f844b412065f2b7d2f9f7d305e59c908cd",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_47",
                    publicKey: "036f612457adc81041662e664ca4ae64f844b412065f2b7d2f9f7d305e59c908cd",
                },
            },
            signature:
                "30450221009711559a43005c808113a1e9a01b1665495ff4bf30d635f7d98c752ead4cc3fc02207879e2a939914effe2b5c80cd515c4b3ff77a071b707c85c4444481878803db9",
            id: "55853d2d2a98def00c5ab842866a44d1db91678a07b6dd63d062508db28a00a5",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "026c598170201caf0357f202ff14f365a3b09322071e347873869f58d776bfc565",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_5",
                    publicKey: "026c598170201caf0357f202ff14f365a3b09322071e347873869f58d776bfc565",
                },
            },
            signature:
                "3044022025ba51a588253524557547ec492d71bd485fe5b291e60eef681c39eaf8ee781702202bf24c3d295c7a2c9aed97a79fb835506797dcfe7e7a2853e2578e7773c7e134",
            id: "553298aadf692c9c5d0334c307dd4ac0e277a49ed165c97ce1362f8ec639ee3f",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "0287a12b336fc781f2621aeb703ae47feca4d3ba6f30625f09ba03d225be6ee2bb",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_19",
                    publicKey: "0287a12b336fc781f2621aeb703ae47feca4d3ba6f30625f09ba03d225be6ee2bb",
                },
            },
            signature:
                "3044022041291ba10ad30fb9ebcb0e13902e92d85e2c3e98493b6d369d7d1e70e8474e31022009083444460c415eab6b4beed9e0206eb0733bad5d2a476af4db4f5b5e74b835",
            id: "90af927db7b258538c8e21116b5a31418c88ecc163628b2b65fac92a5a949b14",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "0311077c86a98b67850e7ed2c81775d094cf81c6991082ddc33fc7be5347dc765d",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_42",
                    publicKey: "0311077c86a98b67850e7ed2c81775d094cf81c6991082ddc33fc7be5347dc765d",
                },
            },
            signature:
                "304402205d4111c87874e696b8f4b8897d0dfe68fabe4ad5c5769026c6ecdd04f09a1e2f02207b9c8a2a16b50164215eb1efea6d5d9f4e693cbb7eec8535e526cf8ba68bb796",
            id: "8a920ebf5255a102d0c9c5fd720e0d36a6a3539991a2267442facf1fea2d0b86",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "02f7acb179ddfddb2e220aa600921574646ac59fd3f1ae6255ada40b9a7fab75fd",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_10",
                    publicKey: "02f7acb179ddfddb2e220aa600921574646ac59fd3f1ae6255ada40b9a7fab75fd",
                },
            },
            signature:
                "3045022100f15ff048872020d9efc561b8c837f542d54d43b9b071f7a6cc09643c6d4180f002207d0e82153a30b66f43fc4cb4b9b3093bb3d5dfd70f96928c8780c838b1448c19",
            id: "30738f376aa40fb3c8d8849a5dc698786aeb1409fa801c18729f8da624631391",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "02c1151ab35e371a333e73f72e9971cfc16782e421186cfff9325d3c3b9cf91751",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_20",
                    publicKey: "02c1151ab35e371a333e73f72e9971cfc16782e421186cfff9325d3c3b9cf91751",
                },
            },
            signature:
                "3045022100babb7410d09215def98078bbab6b5e5690c2ebf54960d94527226ed3925877320220342576d1d8fd2d2fe3b6974cab48a2e16b4813f022b341b32f88e13f572bf060",
            id: "ccbe1c27eadc1b3b33f3f87f645be4f756021ee3d4c96f4f094e1f82d5728a3a",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "032c51f895ccdafae44e68baf283c50605d3f7dbba1c48011c6577383791f4a374",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_49",
                    publicKey: "032c51f895ccdafae44e68baf283c50605d3f7dbba1c48011c6577383791f4a374",
                },
            },
            signature:
                "3044022032f2c350cc1319f5838d6880e91b49ae0438fb3a626ed9ab5e27ce8788e3347c02202cca18567c8491e0feea8a5f078e28605029346c509fac0c0a192e934f8c5326",
            id: "f99af0fbb4d65c2c3f2c1c558f0c0c0eac2724942802fcde02fa6da1d3a9000c",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "038082dad560a22ea003022015e3136b21ef1ffd9f2fd50049026cbe8e2258ca17",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_3",
                    publicKey: "038082dad560a22ea003022015e3136b21ef1ffd9f2fd50049026cbe8e2258ca17",
                },
            },
            signature:
                "3045022100f0cb5d885ddf3bd4a58837f9b86486da4171652a5eb39228dfd0ff9d34d9c7c602202dc6e3d268d745a7e8633311a337ec097382342049672880c7c2215cf58e5da2",
            id: "2dca03aed08533585d8bc609da5deb9f17ac9be5a8352769d7ae63d0db16ff59",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "0395ff46d07f197dd4d4cb5dbb46e164c1e7ca9896c33827f9d6f8003ea167917a",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_21",
                    publicKey: "0395ff46d07f197dd4d4cb5dbb46e164c1e7ca9896c33827f9d6f8003ea167917a",
                },
            },
            signature:
                "3045022100999f19fbdc9a12eebbb8c748a4cfc6c91b2233f333a09cddfd49dfeab6aaf38602203d8dc9d1551d400572a88ee812f51f897f8b35508713b789b2c1bf6dd0e88945",
            id: "5d7e51d57b5914ec201ab65a019ecdf651c4f267cbffe403fd2170bb95145f9d",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "03343930630f8235c2b3ae9ba013dbecd4d8bfc999d34bda33e18c8caf43772f1f",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_41",
                    publicKey: "03343930630f8235c2b3ae9ba013dbecd4d8bfc999d34bda33e18c8caf43772f1f",
                },
            },
            signature:
                "3045022100e86e648add940a1e637e32ea9187497c281b843da09597e62d0c927d7f43235102200479f64ae63abb55e338f9ce1073a5c46907f7a2a82ea6f9bd9bc29811683515",
            id: "eaeed4133da26612c53550b6572722d8c3380d0a2344da1bd270eed1ea91fdf3",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "0345ef2a1e4f64707044ba600efdc72aaad281c5a73195f930527c54d7cc891904",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_11",
                    publicKey: "0345ef2a1e4f64707044ba600efdc72aaad281c5a73195f930527c54d7cc891904",
                },
            },
            signature:
                "3045022100bc3b2ebc58a92bf38672206e8311e7ef0e54912abce7338155b11e7d191b0b5d0220765a568c1fa4665c0ace6b4bd3b7ba0f8329e2f25af7a3cc0d78b2ea398084c3",
            id: "bb91e78e43c59a19ac06c015d8a7ef09d7c5b274c9f98505e5a978027354b71c",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "03a46f2547d20b47003c1c376788db5a54d67264df2ae914f70bf453b6a1fa1b3a",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_22",
                    publicKey: "03a46f2547d20b47003c1c376788db5a54d67264df2ae914f70bf453b6a1fa1b3a",
                },
            },
            signature:
                "3045022100aae4868ab75a33e4e77f9bf6c53b920c5e7c523a7cfe271d1afc472655f3d6a60220499f1bcb79bc0fa830dfa939898db5c9fa8571a2788c8de0da7e550bfc818bcc",
            id: "a6e687647dde9c1db68690090afc4fcf11833dd35fff3186b6b709a1e7d24260",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "034776bd6080a504b0f84f8d66b16af292dc253aa5f4be8b807746a82aa383bd3c",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_46",
                    publicKey: "034776bd6080a504b0f84f8d66b16af292dc253aa5f4be8b807746a82aa383bd3c",
                },
            },
            signature:
                "3045022100c0cf1fc54705c13f70fde39c55a1703a4c612b8a919379cd5b1ada464c7cc8de022074ee62490a184010ad2418d3177ff2ab03d02d2589000176312b90422b1bd64b",
            id: "70262b0eec3ab5a60a736eb8a628cb600eae7522464a49791c0bf26e82318ec6",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "0363550e2a3fe2153526effd4302045fa2c3027d0d9b30b19821a4870c8cb134bc",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_6",
                    publicKey: "0363550e2a3fe2153526effd4302045fa2c3027d0d9b30b19821a4870c8cb134bc",
                },
            },
            signature:
                "3044022045db446b109215c6d3dfb0ee5869154a8a7624376c3760eec4fadc75a29033cf022003e524d64f3ccd0c6de4ca80a7327e2c47ffd16b3ad042bd25a02f5f64500ab7",
            id: "56048c449694964bee3d367609a7bc46c8da20f66878c09c01dcc53c3abd932e",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "034ff439276ab784098e66dca4075111008448a3b3519c10701bd2d1600ec1203a",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_23",
                    publicKey: "034ff439276ab784098e66dca4075111008448a3b3519c10701bd2d1600ec1203a",
                },
            },
            signature:
                "3045022100f8f69f2957781ed02d64983744c8e51fae613ebe5bbb330d4f509bdcf4fc6b6602205568ad1fd840e01ec26a24ac9a0ff093e978172da55d494138d018a45eb67893",
            id: "e15dfc4e18106480083b3c6211349fd9c803e334e9ba5eb62cca19ae3f57d8e7",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "022b80e0d314928d93e48d1fe02190378384215237a5d42a86bc91580ba8c88689",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_40",
                    publicKey: "022b80e0d314928d93e48d1fe02190378384215237a5d42a86bc91580ba8c88689",
                },
            },
            signature:
                "3044022021eeb9e1db8915a9adb99db72972cd17fc7b5b377fc532ac2c9deffcb2707edf022068b9e08f45bbebad89295f520ad40d7786fe64059d45df95551576e3acb736d1",
            id: "2bd0f888ccdeeca24a0134e3c1bf729582d284f32ee000d97f1417f1349a6594",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "03c74d53dcfef0d79f249a812e95c1a58040b769867df036639f0c107d3b577b12",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_12",
                    publicKey: "03c74d53dcfef0d79f249a812e95c1a58040b769867df036639f0c107d3b577b12",
                },
            },
            signature:
                "3044022040a9d0975f747df19792211546410d7c735aff2d26f367d1bf9233ffd1d993d702206890c66d4d0eb5de37df088c082d8fbd8da043817b48a76bd5d70f1e3f6b6529",
            id: "f75ac5ccd243e09fc9da2b3842a0654ca860d2dba5bb73866693a8a918937994",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "039f71d74e13cd8c4b7e134ad46e2c28f1bc8e6eacaa9839b5bf59eef5cea06f95",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_24",
                    publicKey: "039f71d74e13cd8c4b7e134ad46e2c28f1bc8e6eacaa9839b5bf59eef5cea06f95",
                },
            },
            signature:
                "30440220550c0ab565ab2de649ca7a2aaf2975453a1e4ab8b0d392d69663c0c9b6b80b7b022039047d4d1bf4e9b167a95adcde0a5a8631aeca060dfd426da28a10d968fb3a64",
            id: "aa2ed932faf4832848356beaf87e5381ee56a1a84fb485ba975acb28f8fcf5df",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "030a9321ff83e384aef559e6030008c23a137e3b3c5d45028e46cccbaafce772b1",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_50",
                    publicKey: "030a9321ff83e384aef559e6030008c23a137e3b3c5d45028e46cccbaafce772b1",
                },
            },
            signature:
                "3044022038df37ef25928d1a04516e982c99f49cbdc193603f814b48ab3802153bdd352002204c918915a3cbfa305c5f898ae4bcdd75394b57460f85c80daa0999751d466c08",
            id: "d30a726e1bb8d199d8f44700bc999c9a0a1a8be86e4be6a15764ecd424f9db1b",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "02def27da9336e7fbf63131b8d7e5c9f45b296235db035f1f4242c507398f0f21d",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_2",
                    publicKey: "02def27da9336e7fbf63131b8d7e5c9f45b296235db035f1f4242c507398f0f21d",
                },
            },
            signature:
                "3044022028dd44b9609b0b599c15a257757fd068f9014e33947c77776a6fcbe71879271b02200b46fd8eb0827da6de13f5efd63b17f29e8ba4600e4a690ec31eb08bf2d9af33",
            id: "1410b8b5f15c05528013378251bf5da30e04c8a6b7ac0f729b527664cfbdfbc4",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "02be75b3862c454887da01b866972b4fb312e0b72fa7d5dda5c0e828c1f4d7f964",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_25",
                    publicKey: "02be75b3862c454887da01b866972b4fb312e0b72fa7d5dda5c0e828c1f4d7f964",
                },
            },
            signature:
                "3044022038edfe34f7b89b4e69ea8b94e3335063b60deaee28246932147f53b2525924a402205b89f5e3d956aa49f24f81e2ba3447c19bd5c026568b3bef73a7a7d5160ad661",
            id: "58d14b74b71586e18f0499a50004ec2e0cc2e5b56aa53f4cf57084030ff90fa3",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "03827628ae32074e284bcd660aec4f0504ba5d401586cb9566c887dd4da522c1d5",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_39",
                    publicKey: "03827628ae32074e284bcd660aec4f0504ba5d401586cb9566c887dd4da522c1d5",
                },
            },
            signature:
                "3045022100bc1e477994bf4cbcdb5cbe2bd92c7d955a03adfe562f8e3bf04d2f62965e9f78022045512772d8453314361161b2bd2a39aa0a7fbb897a5a83f4c7ab54ced615b42c",
            id: "3ee53b3f1455ef0ddb52afe08854c9d87f42c7313babd3e05bb3ca4f94c495ef",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "021770413ad01c60b94e1d3ed44c00e0145fe7897e40f5f6265e220f4e65cf427f",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_13",
                    publicKey: "021770413ad01c60b94e1d3ed44c00e0145fe7897e40f5f6265e220f4e65cf427f",
                },
            },
            signature:
                "3044022052fe00e8e9f05b1d890f6910beab0627c823eb2d5875b4b9813a33aed11edfb6022034a723b827ce0e73bfdc0f535b244ffc983f8d549ee72b4d432de90d658db72e",
            id: "4a3d204c2916c93360d7bb11390e355bc1a930e3cf503965a45253d65bfe928b",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "03287bfebba4c7881a0509717e71b34b63f31e40021c321f89ae04f84be6d6ac37",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_1",
                    publicKey: "03287bfebba4c7881a0509717e71b34b63f31e40021c321f89ae04f84be6d6ac37",
                },
            },
            signature:
                "3044022013b2798a4ab4d741850abac10d962360cd4ab6a47dfac7c1c806d6f9c3d810cc02202742414ad8a04ce679b445fcd040fb877bbfed3d2692b873dec8cb46c01c8c4c",
            id: "7d0c5a44a7517f6ad7a1253db45d58e85aa1c735a282a32f45d28efdb7869d7e",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "02af50fcb5183b3f2c468fb4e75e573a6bf0a048a6fab095df6d70f9f91fd6651b",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_45",
                    publicKey: "02af50fcb5183b3f2c468fb4e75e573a6bf0a048a6fab095df6d70f9f91fd6651b",
                },
            },
            signature:
                "304402202c372b7b9679a8fe66f952a1d47d4327968d6e98770b215ada2fed6a8d87ed5502205a797fb511cfba557255dd37e028fb40981b7b65ad2ce8fe0e559a46eb274bf8",
            id: "70bfe97ae7452dc752ab4de0e2a0e81bd18bef07392c56e7a101257683d4d932",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "022f2978d57f95c021b9d4bf082b482738ce392bcf6bc213710e7a21504cfeb5a0",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_7",
                    publicKey: "022f2978d57f95c021b9d4bf082b482738ce392bcf6bc213710e7a21504cfeb5a0",
                },
            },
            signature:
                "3044022058851712200f7386d6b3c188444f9c8f05788667649ec17c71b9e514206eb105022061e6a4bc4cd11599792e03298f95509893d56af54d51e9f639981045e754b974",
            id: "f6f90ff09dee5be7d8f3d58d217772df7a95865bf8609d7d5b0b673e9a5bc953",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "02589ffa5363e245f8068d823af8b721b6bf9742c17cdd7925bc9a1fefe66a243d",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_27",
                    publicKey: "02589ffa5363e245f8068d823af8b721b6bf9742c17cdd7925bc9a1fefe66a243d",
                },
            },
            signature:
                "304402204878d69a166e60e0a779c31fbc48c67b70d2e4aed1d63c60beb9f070963e2894022078c46b6687f23493a4c2ed39709a183a0f7352568cc9cc2c1f0d7bf0d809a4a4",
            id: "f68809e407d20a50029fe460d411c866b79c7e09c076dada768a38d81f184aa3",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "0232d790f7a6ac16f2581283a47d0dcfbb51ee100f92e46cea46a63a8a043cb294",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_38",
                    publicKey: "0232d790f7a6ac16f2581283a47d0dcfbb51ee100f92e46cea46a63a8a043cb294",
                },
            },
            signature:
                "3045022100d5576393a1dea704cf79a5d0bc2757a3a5e66e1055103b52157fca05fc5693ec0220522832ce0e31b779decef83ac8ce764930de927df9ae1d6f6f99a3312d99c90c",
            id: "2ec6c6f33f00431ef063fbb8a79fb90eadb13a79bf46e6e1df36dd9434314df0",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "03d27324bd4829f57d549bdb273bfd666d88f43d8429ba9a42a4fa1c9bd1032a24",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_14",
                    publicKey: "03d27324bd4829f57d549bdb273bfd666d88f43d8429ba9a42a4fa1c9bd1032a24",
                },
            },
            signature:
                "3044022008a7d0bfe9c4c150566ddf701d08e84b4a5f84b07e3b1c91dde1cefa16d2a3c202200b787e898c0b2c68f4343e74f18ae7363f62b5f4ef2962386932aee09a9fa0d4",
            id: "e37b3efbf034bea4c852be7d7013978f8999eacc39549ceea775de197e14e8da",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "03747096ce60f19e52e99f5d80ae1ddedf6fa88be4ff0669b33f75f3fd991cff28",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_28",
                    publicKey: "03747096ce60f19e52e99f5d80ae1ddedf6fa88be4ff0669b33f75f3fd991cff28",
                },
            },
            signature:
                "3044022023b6fbfa5f4482a4dcc34411846696052b1592786ca87243b7d3344fc9fe9954022035402fbca22691de2497552c743f0f68c7591edd1bd7954ab7639548fcd558a3",
            id: "08268f5e6c15cf146523ca928f24aca65b162f363593d927c66144ee5df297cc",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "03e59140fde881ac437ec3dc3e372bf25f7c19f0b471a5b35cc30f783e8a7b811b",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_48",
                    publicKey: "03e59140fde881ac437ec3dc3e372bf25f7c19f0b471a5b35cc30f783e8a7b811b",
                },
            },
            signature:
                "3045022100b3cad169f29a3a95995b87e1b50b35583c1bff91d69cfa236f58ce452491c579022026775f4ef50b50ecf6d78b530b4633711394983456e6a45ec227b652c86e3014",
            id: "ad94ee2ae94813a638b93909930c7cc631c364b6c8528b2dcd6fa8f69260cc2d",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "03832487ab0aa9450a4c223999bf4311b7b65c50c06baa90d19d4f65c27bfeeb93",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_4",
                    publicKey: "03832487ab0aa9450a4c223999bf4311b7b65c50c06baa90d19d4f65c27bfeeb93",
                },
            },
            signature:
                "3044022007ac9ff2f272f3fda4947393b8688586cc8b2958ff5dc7931ac8f82c697bb76802202a66c28852bbff86ef17ac7f51e7eee52e611e825d91a9846f531ab3c3115c81",
            id: "76fb1984da9ef90fd7d588756163c97e00d3e4d6e9dfe78d9e3d3cb6d71ddd38",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "0308c0d019cd9c0c59618e3b86afc584078b54a85a025c9f30a8bdc82cdc8e1252",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_29",
                    publicKey: "0308c0d019cd9c0c59618e3b86afc584078b54a85a025c9f30a8bdc82cdc8e1252",
                },
            },
            signature:
                "304402204416e428688ad29928303fb2b00a26996cf79753fe70fb91c1f4635c644ba859022068ac5eab7d05f87c40ba36bd9dc149607c196778120c061698d7ab64aaade7ac",
            id: "0f442a91857061e87dd193b0b9f17a71719ca7e3da62841a63568713fc12b5e7",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "030d13c0a7f1433091a5730cfd7956175261bb9442d8c0c0beffeb3b5de32e5aa4",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_37",
                    publicKey: "030d13c0a7f1433091a5730cfd7956175261bb9442d8c0c0beffeb3b5de32e5aa4",
                },
            },
            signature:
                "304402206a248caa5949024202f297c38cee18845e344c5f140be74349787097d3b0a33c02207ac84336e02592bb5e00dcd0c490d30eb856b34177ab9ac03410d82a355a7b0d",
            id: "eed30a45c350fdffc5877458f7fe29f28dc4bf81aa1a197d003c9433148b71aa",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "02c39e352d0f3c4ea19842a5bca3114b4247cd56da72157963a5873ecfcd824aca",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_15",
                    publicKey: "02c39e352d0f3c4ea19842a5bca3114b4247cd56da72157963a5873ecfcd824aca",
                },
            },
            signature:
                "3045022100c99336ce666cb4a6db3727a61c04c14d8746365f72280d9984441b7d2b568b5402201759e4f417f683743e1d4a14f8a7a215009321cdfa29834b2dbdbe54ee22c1d9",
            id: "ecfba14a58f9d79782c4f905646df28bf566e3e7d1f17b39df6fe6b52c11de59",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "02532c68cd0842fb86b2202c1027eafc741bdd581517047d9d19319e6741c54883",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_30",
                    publicKey: "02532c68cd0842fb86b2202c1027eafc741bdd581517047d9d19319e6741c54883",
                },
            },
            signature:
                "3044022070de7b4d4ce64bd605c9d008142544c2b113cc84df07ed1982e0adf3cf69f4520220211b01710a6533a270dc2814c7f968adf27eb6dbf437e7a72960b013b9651a0c",
            id: "36ce5323859a92f302f77f27bd08ee3485d720f55842ccba353a47ea96a964c2",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "022ebb110e9630377073d4f0e32897a5928a2c71f2941fb6d4b71251dbd62da98c",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_44",
                    publicKey: "022ebb110e9630377073d4f0e32897a5928a2c71f2941fb6d4b71251dbd62da98c",
                },
            },
            signature:
                "3045022100a7c271633ecbf3c6641c7db36913b5fa0ea521f400a4848edf024648f3d7128002206a271f8a88644062b64d856407af9567c0b2937d4a3d89a3b3d07edbd3a0f177",
            id: "e120452e7c56a9327b2be7dfd3dcecae193f2e2e772903008b03cdf00146ebd1",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "03691178f8610d0a295e650201b62345056c788d7f9ac7e8570b69c6c90091b564",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_8",
                    publicKey: "03691178f8610d0a295e650201b62345056c788d7f9ac7e8570b69c6c90091b564",
                },
            },
            signature:
                "304402200394b6545015bcf2d0f291de57a4197cb6ef57b2ad5fa37f05e8a220913ba83502204d0d2f2206edba54ada5b8e5afd194ba83dd1bf15f744258409595251dbe3ff0",
            id: "7d15eee8e4e3be3d2c44acd51b87a816bdb593565d4ac358dab24ae9c8a5bae2",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "03807f9abe33fb390546bb5dcab075dd1136d0b98c54420c8c463c4ed3545161b2",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_31",
                    publicKey: "03807f9abe33fb390546bb5dcab075dd1136d0b98c54420c8c463c4ed3545161b2",
                },
            },
            signature:
                "3045022100989eb331951a13152aa03583efc765499e836c6fbafcafec4302b243ada8de5002203876fc4cf7fdeee4a095667e55a2fef84e5a7053e807b4d8e029883f0d578019",
            id: "baa686d521f95d265e7099cfd9ef14e0a9a92254dd94c16ce50c460bd013c588",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "0282d4297584488b9c843face25f1816f95ccdd6660b1a2788fef259ed26a86e8e",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_36",
                    publicKey: "0282d4297584488b9c843face25f1816f95ccdd6660b1a2788fef259ed26a86e8e",
                },
            },
            signature:
                "304402202be177dddfad323302565a866d38a3e7939e0234b16e7dc02075cf258502eba302200928a139ec1a82b4609fcc1bd6d1d027ad050e93fcd2eff94181936d2d43e39c",
            id: "9fcf7ec6fe98ed94710e212226d8b90df7e7467d66dd4c5c9d48474388be3099",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "02dcb87d64ee2fdc6c2bcecdd841ad8e3b3163599214a818924fd433a8ffe7daf9",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_16",
                    publicKey: "02dcb87d64ee2fdc6c2bcecdd841ad8e3b3163599214a818924fd433a8ffe7daf9",
                },
            },
            signature:
                "304402207b4f8c09a728acedf3b6ba0632e12d01670c683215053e49dde8598954d85a9a02202a7d7930baa17c2134b314e47dd6c334c828f78e573a2bf92fcbc1146d630541",
            id: "c35e4b1e7a2435664fc0939251c2052633ebf4b51fb22d15e71bfcab85b26de9",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "0305322487b6dfe8abe67f680bed2df70d92379a48840dd636b32a2c142baa1055",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_32",
                    publicKey: "0305322487b6dfe8abe67f680bed2df70d92379a48840dd636b32a2c142baa1055",
                },
            },
            signature:
                "30440220127d27312345e015c681adb799c1a87d16fb0caaabd5020b39257d567816b91c022018b2388f6d2d9afb3714d84ed102b3ea61159772786033c855947613c7ce7b5b",
            id: "0d682a3a9c252a674043bee5240e456dae2685d76fbd3bdeda6ff50f0c442fff",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "02275d8577a0ec2b75fc8683282d53c5db76ebc54514a80c2854e419b793ea259a",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_51",
                    publicKey: "02275d8577a0ec2b75fc8683282d53c5db76ebc54514a80c2854e419b793ea259a",
                },
            },
            signature:
                "304402203d0ee691830e4d001553bf4e49b6d9669b3c959376f391410551c8adc679dac902203ba6e275bf6d543efd19d20428649f802d9396bb0967114a1f09c24827be1da7",
            id: "ec2373b0d609ae72fb400ffdfbffc59670ebbf1c15f59c0ac22a4030dae700e3",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "02292be0bf30b21cf57d55b20f9092a70dc1d1b71f51a91d2ccb2d2f8d8abe6983",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_26",
                    publicKey: "02292be0bf30b21cf57d55b20f9092a70dc1d1b71f51a91d2ccb2d2f8d8abe6983",
                },
            },
            signature:
                "3045022100f2cf77b0510f589b5aaaf2b0027ffbce6ce8d4873cdc67dc8900865d156de3be02203c22e30945618683182f3d3873e6b3657e0900b062f866bab2705cd593669e79",
            id: "3cb2f0f7d05a515d4c5c873cbe96e33b1dfba1b7718e4548de7f9da54933b652",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "03ba0fa7dd4760a15e46bc762ac39fc8cfb7022bdfef31d1fd73428404796c23fe",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_33",
                    publicKey: "03ba0fa7dd4760a15e46bc762ac39fc8cfb7022bdfef31d1fd73428404796c23fe",
                },
            },
            signature:
                "304402201e328159172d543d2225c247c6b728800c52eb724f67c0e919f6b7215e6bd7f2022075fc02fe0b14a1499c5602d87ca2c99d6e789beaceed2b9702060dece872d14a",
            id: "2fd77e744399c9632cc8f106c39237f201dafda976f1040235359f99eea3b832",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "032b59ba992a9b8987b48606779d92101e4b332f6fcb47a4e61e9b49f2dbb45b2e",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_35",
                    publicKey: "032b59ba992a9b8987b48606779d92101e4b332f6fcb47a4e61e9b49f2dbb45b2e",
                },
            },
            signature:
                "3044022063903d82e8bd15a6741a298b9a6007d0dc3626acfe2f072c3b624ccbf91ce3360220486ba4cc5591d8aa31b77dfde025b61691dbaad0feabe13e840d26e40010c5df",
            id: "5baf9e318c9e4cb0513a21eaea27e51c849f95fddc963207fb07aa2fd2b9f9d4",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "03d7dfe44e771039334f4712fb95ad355254f674c8f5d286503199157b7bf7c357",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_17",
                    publicKey: "03d7dfe44e771039334f4712fb95ad355254f674c8f5d286503199157b7bf7c357",
                },
            },
            signature:
                "3045022100efc1bc16e0b646da48f84822543b62ef5253bfa98bed6613f2d6d4634076e61802200ef243f9dbac7633a8819ce45e2a85d0eacfdc9a33a92bd3a03e90cbd312b823",
            id: "b4a959ad75f81b7fdbb957c90a3a63a6c5589e7819e2c455733a3a2b4b034634",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "030fc33db3d3ab20d73bc6d52633a4f3cc26081ce307c89ab9fe493def7dba4b80",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_34",
                    publicKey: "030fc33db3d3ab20d73bc6d52633a4f3cc26081ce307c89ab9fe493def7dba4b80",
                },
            },
            signature:
                "3044022012e52a479648990bfc1ed12bf901cad865708ff45962c3724ea67967be4f9d0102201901525ed8dd090af6a2637c123afb304e9fd178794addcb88d916227e66887d",
            id: "6439f2308efe31ac52ad06ef1caa45b9abf6c589118b7997da6a287325ca36e7",
        },
        {
            type: 2,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: undefined,
            senderPublicKey: "034985f6f2167cc8c9df1204aaf6744bc97c0d7f3c07c43ee6c0978bc91b6c680e",
            timestamp: 0,
            asset: {
                delegate: {
                    username: "genesis_43",
                    publicKey: "034985f6f2167cc8c9df1204aaf6744bc97c0d7f3c07c43ee6c0978bc91b6c680e",
                },
            },
            signature:
                "3045022100a0874d1582ce210081f7ab30e7f951dfb9ce8f512d237f8a8cbd5d85569ef3b902200f0053c05de3d6e5ada4e4cf1403a836779d653573c2f374055645cc954c4c4a",
            id: "b0733072e98d3d6afe977e32f3dd118c15e79212232417743ffb551dc2a2ba55",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AJPicaX6vmokoK3x8abBMDpi8GMPc7rLiW",
            senderPublicKey: "03d7dfe44e771039334f4712fb95ad355254f674c8f5d286503199157b7bf7c357",
            timestamp: 0,
            asset: {
                votes: ["+03d7dfe44e771039334f4712fb95ad355254f674c8f5d286503199157b7bf7c357"],
            },
            signature:
                "30440220158ed59156e0eef2d2b94a296451dffe079be701b3d74f0443ef43bc266b334202205a2c39f57abfcd279d568608b90884b3ebe107316aa7552eca35c743b318a47c",
            id: "ea294b610e51efb3ceb4229f27bf773e87f41d21b6bb1f3bf68629ffd652c2d3",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AHXuTrYMxsdSvYJvRoBkM3kH8pS4QSq9i7",
            senderPublicKey: "030fc33db3d3ab20d73bc6d52633a4f3cc26081ce307c89ab9fe493def7dba4b80",
            timestamp: 0,
            asset: {
                votes: ["+030fc33db3d3ab20d73bc6d52633a4f3cc26081ce307c89ab9fe493def7dba4b80"],
            },
            signature:
                "3045022100898da9f693a458a6875344c6c4cb73069c4075904c75595ffbc665967d84b07002200f168aaf3ab1b52dfa74599394387dc4cf627a447fbc5a91000e9d251cdb20c0",
            id: "3639b5dc6d19d46d8254d941bf7ace0f3da8a7cf8a56361921b260820c7239cd",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AZFEPTWnn2Sn8wDZgCRF8ohwKkrmk2AZi1",
            senderPublicKey: "032b59ba992a9b8987b48606779d92101e4b332f6fcb47a4e61e9b49f2dbb45b2e",
            timestamp: 0,
            asset: {
                votes: ["+032b59ba992a9b8987b48606779d92101e4b332f6fcb47a4e61e9b49f2dbb45b2e"],
            },
            signature:
                "3044022055ed9a8b55ccb3bd0945a710269b6f243f1dbfaa28467d3218a17565eb0c962d02207d31561478f16d93a20f5454ad565dea24e8dda4ddc464cb011f4b6b360c4e81",
            id: "fe24509580cde0c2e2f49defedd3a0f7572d2f78f90b51a253b0d8cebd74c20d",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AeenH7EKK4Fo8Ebotorr9NrVfudukkXhof",
            senderPublicKey: "0305322487b6dfe8abe67f680bed2df70d92379a48840dd636b32a2c142baa1055",
            timestamp: 0,
            asset: {
                votes: ["+0305322487b6dfe8abe67f680bed2df70d92379a48840dd636b32a2c142baa1055"],
            },
            signature:
                "30440220092f367f833d677e8d0609ad1df65f389c2c35d1501c71c245c2982e6a832268022018e67445f525613d6cb6ac0c9683bd0f55bd40d9c929165649414f083c9041f9",
            id: "6a76553db794ebf4d5f60a7d7d71cfe29f4dbcaad9610106fbc578cdc7167cd4",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "ALiMCXj25VkGEAbj5PNbNez5NagZZJxLsy",
            senderPublicKey: "03807f9abe33fb390546bb5dcab075dd1136d0b98c54420c8c463c4ed3545161b2",
            timestamp: 0,
            asset: {
                votes: ["+03807f9abe33fb390546bb5dcab075dd1136d0b98c54420c8c463c4ed3545161b2"],
            },
            signature:
                "304402203dc028b5013c36b03f97b111a8d7c05d0cd8e505b0b0d18747c0656c9b5cfe8102205e9ce8a78d1183b3e9880c69635d04218d94d17808bcc3f92e7af53195c23daf",
            id: "0f9d7e7708918b77afbdfffb63eef8fe87ba36e0131c88b44c1a7f81750cc025",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "ARJWp8VJEieDA8h8YDiHq5LqU9vWcpWGG9",
            senderPublicKey: "0282d4297584488b9c843face25f1816f95ccdd6660b1a2788fef259ed26a86e8e",
            timestamp: 0,
            asset: {
                votes: ["+0282d4297584488b9c843face25f1816f95ccdd6660b1a2788fef259ed26a86e8e"],
            },
            signature:
                "3045022100a80ddd7c3adaf0e97ab938773fc78a716f3054d7e03afc1ddfcb5005badbd2810220231c0dabe2262149f994c939f9dc90d46b9bd7ca96b19aad6788cd3571e4f71a",
            id: "0ac77b2637fb25be42b3b60d1651bbbd788aeaba933a08ec4a417c7b4c54e087",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AMv3iLrvyvpi6d4wEfLqX8kzMxaRvxAcHT",
            senderPublicKey: "02532c68cd0842fb86b2202c1027eafc741bdd581517047d9d19319e6741c54883",
            timestamp: 0,
            asset: {
                votes: ["+02532c68cd0842fb86b2202c1027eafc741bdd581517047d9d19319e6741c54883"],
            },
            signature:
                "30440220772c9cd8b96f74fcddc429d57d466eca6fc40fc211845f59eeb78cb027e116c5022004cda291587eb118d622de21333d2a5783969794b5b0101ad8b1044c7d8058af",
            id: "4b0dda465564d53981c0e36d73caec888e3523633eaa80dfb99a9c81b2604c7d",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "Aa4M1zL3a74L51f1AvEsLmBTsKLKrkRScU",
            senderPublicKey: "0308c0d019cd9c0c59618e3b86afc584078b54a85a025c9f30a8bdc82cdc8e1252",
            timestamp: 0,
            asset: {
                votes: ["+0308c0d019cd9c0c59618e3b86afc584078b54a85a025c9f30a8bdc82cdc8e1252"],
            },
            signature:
                "30440220406d54714b6425ae4553ea8bec75f31fe52e9b1a9b6f6897151253ab7f637d3b022040a2df4b69840f4d9b0b67658c75efdae8d8269780d4cc50d055fa63922dbb9a",
            id: "c7db9d36d97ff0168d0d670ec695e1dc786dfb93f4081586870c8793b50e5f17",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AX1M38eZC6TB1mzz33PxZBYBGrmE2zPdFK",
            senderPublicKey: "030d13c0a7f1433091a5730cfd7956175261bb9442d8c0c0beffeb3b5de32e5aa4",
            timestamp: 0,
            asset: {
                votes: ["+030d13c0a7f1433091a5730cfd7956175261bb9442d8c0c0beffeb3b5de32e5aa4"],
            },
            signature:
                "3044022018b7e51118ec83c985fa4eb3d7f0cf0655753bcbde7e82bac521665fb1c0ffaf02204e2ace460b2542db8c77e41d05d5e02fa5514b746a0a1e947256925846ed19f1",
            id: "c41f4cffcdd523f1718154d5bd5f4f0bec0376076b5f8dd340337e9edb4821ae",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AJv5ZFmu6fuugsdTZNi6ukPgptbCmdW4AW",
            senderPublicKey: "03747096ce60f19e52e99f5d80ae1ddedf6fa88be4ff0669b33f75f3fd991cff28",
            timestamp: 0,
            asset: {
                votes: ["+03747096ce60f19e52e99f5d80ae1ddedf6fa88be4ff0669b33f75f3fd991cff28"],
            },
            signature:
                "304502210088dbe249503da43c157485bfd4f2c95babfe4d0b8bbefe44afa52529b824a79e022045239b6a374fd9aca52c27171ee66b4863c956ae4085c9760d863b1902596c1a",
            id: "b1736ec6a1ea4c6d4eb278430a8ee214c88daefe296ba98530e692f8b7a7434c",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "ALJVm7EYiMtc1JJDG6BupFw3ttRR6Yewej",
            senderPublicKey: "02589ffa5363e245f8068d823af8b721b6bf9742c17cdd7925bc9a1fefe66a243d",
            timestamp: 0,
            asset: {
                votes: ["+02589ffa5363e245f8068d823af8b721b6bf9742c17cdd7925bc9a1fefe66a243d"],
            },
            signature:
                "3045022100fcdf750a775e728a31691a1b38908a7f990b579da510959cc2c63442f5ffde760220316ebb051d9fecb2486771dd39921fb12675b6d46b2441dd1db3c42fad0a59b0",
            id: "069271456015c2ff842771775993b8afc3404bc070572eeeb0f2fd72d58e18dc",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "ALs933qA9Cm3caRDei4ZXxnzXexpXNem8U",
            senderPublicKey: "0232d790f7a6ac16f2581283a47d0dcfbb51ee100f92e46cea46a63a8a043cb294",
            timestamp: 0,
            asset: {
                votes: ["+0232d790f7a6ac16f2581283a47d0dcfbb51ee100f92e46cea46a63a8a043cb294"],
            },
            signature:
                "3044022034ce8f77ea9d0f5cf3a9135d7b72d0ba3b96ac6d7eaa3670e9956aef2c9a83cb0220626d1f269128f673a23f9993ce00ba78a08103e697298be29a4c8ee94f204e3a",
            id: "9a99bba8340e7ad4e05d8424a0977ebbde428d31ee066c9828bd06b42bb42a72",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AJRf2oWusRmm8QEiZuwvMg3qLbMxpd7BJ2",
            senderPublicKey: "02292be0bf30b21cf57d55b20f9092a70dc1d1b71f51a91d2ccb2d2f8d8abe6983",
            timestamp: 0,
            asset: {
                votes: ["+02292be0bf30b21cf57d55b20f9092a70dc1d1b71f51a91d2ccb2d2f8d8abe6983"],
            },
            signature:
                "3044022039ae1155f8b87a61c38b25cbbf30da6ecf6cfcc12b25c2e7fe576373754a41eb0220061a66a893129fbad5d48cdd19cf48b1a0d133dd2f3ecdc60ee7b87277e1f81d",
            id: "6c2c8926420ac269b50fa30127e0e791afb2131aff5821ca7aa80d38a0182048",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AJQuCRxeJpzkoGSBMXtmuRMYg9mtCb4qHf",
            senderPublicKey: "02be75b3862c454887da01b866972b4fb312e0b72fa7d5dda5c0e828c1f4d7f964",
            timestamp: 0,
            asset: {
                votes: ["+02be75b3862c454887da01b866972b4fb312e0b72fa7d5dda5c0e828c1f4d7f964"],
            },
            signature:
                "3045022100d0dac2b7691aa059b1048d7925a0c5d5099f6e9b0f2e321e6d4f128ab1b3272b02207e8c4f643f8f9d1c3f81f0cce6a698df2da2ab71d5b01042766bbe0f46f4a775",
            id: "9259193c5de72276ed7a99f9d507dd6ea9856411fda521074fb41a556294fdf7",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AWdRZPxQQvG1TP6hdxvQCn2t3skerq9Ky9",
            senderPublicKey: "03827628ae32074e284bcd660aec4f0504ba5d401586cb9566c887dd4da522c1d5",
            timestamp: 0,
            asset: {
                votes: ["+03827628ae32074e284bcd660aec4f0504ba5d401586cb9566c887dd4da522c1d5"],
            },
            signature:
                "3045022100d5496fec447367ab6b53956a8c40cd8566e050ebb3b92d2c0b2a9d09bef36c7402205e32367605372375801f7b9db39aaafb46ee763b1494f0aca144fb91f3415752",
            id: "2a41e5946ab0773ca2334bba9d3510184bdd258f1c651ff8ec95b7b64a01dc2e",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AcFWyJRk5sRKagThYhk5e1jdkx3wzhL5cW",
            senderPublicKey: "039f71d74e13cd8c4b7e134ad46e2c28f1bc8e6eacaa9839b5bf59eef5cea06f95",
            timestamp: 0,
            asset: {
                votes: ["+039f71d74e13cd8c4b7e134ad46e2c28f1bc8e6eacaa9839b5bf59eef5cea06f95"],
            },
            signature:
                "304502210099249695dc38826e04c8fcffd2570b98c43dec4788cc6a19737ed0872f17ec3302205301f645d803ad5df4ab1a700446e28c7cd76153607f6a2d68ae9168d46f3fe9",
            id: "e5c09b0fb2c24c57a4dcef0078953093800329ab4dc8e16a9d9f68215b5acd3d",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AZeX3qaqdU8iCebAKYoLMR2QkiuG5CffgU",
            senderPublicKey: "034ff439276ab784098e66dca4075111008448a3b3519c10701bd2d1600ec1203a",
            timestamp: 0,
            asset: {
                votes: ["+034ff439276ab784098e66dca4075111008448a3b3519c10701bd2d1600ec1203a"],
            },
            signature:
                "3045022100f983b03e319aaa6c6ab6381e3ef8c0c035d6e3cc2139cedf70fd4e385393e38a0220286f73577765eb3e89e362785ad8a6de572bebf41bbc1f515b0ea93e41801eb3",
            id: "00b2c0455ef6f508d65f11bb49e3cfe1e6062d5fd153cafdfdfd2ccbf9c646e5",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AdT9FrWUksf99Lhkr9JGb8f2HLSg14kTqr",
            senderPublicKey: "022b80e0d314928d93e48d1fe02190378384215237a5d42a86bc91580ba8c88689",
            timestamp: 0,
            asset: {
                votes: ["+022b80e0d314928d93e48d1fe02190378384215237a5d42a86bc91580ba8c88689"],
            },
            signature:
                "30440220103862ec51621ca27a0ec6b2817848e8824d2d09dbf7e6aac2f45aeea5d2dc9102205e8cce78b5cd7148aa4d406dc7b491dd7758047200e10cfe1e5fde5c56107ac5",
            id: "e25439ad11cb8db3d49ccb3b8b608c1bcb24cb29b2e5ea15101cce3e475224eb",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AGqSC7M137ctKtkAjd3J1haCEWNfayXnuJ",
            senderPublicKey: "03a46f2547d20b47003c1c376788db5a54d67264df2ae914f70bf453b6a1fa1b3a",
            timestamp: 0,
            asset: {
                votes: ["+03a46f2547d20b47003c1c376788db5a54d67264df2ae914f70bf453b6a1fa1b3a"],
            },
            signature:
                "304502210099241ced4a0fd1eb02f5cdcc880ae5f48eb3c7e490d4520c20124ecbf403893602204729dc6cacf3e87c97ca57c1be54d1e80791bf31ef022135e68fc06c950f6994",
            id: "1474f50815c6c7df41ab652414806d61abe15bee0d41f32d772f4e2793badce4",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "Aa3mWTMFTXeTJukUgpeihQLBYDHBzdpWZX",
            senderPublicKey: "0395ff46d07f197dd4d4cb5dbb46e164c1e7ca9896c33827f9d6f8003ea167917a",
            timestamp: 0,
            asset: {
                votes: ["+0395ff46d07f197dd4d4cb5dbb46e164c1e7ca9896c33827f9d6f8003ea167917a"],
            },
            signature:
                "3045022100eccf81d44992c49a5ee37c6fc2ccc4b6bee9aa44888513b3e18e79452ede3156022056b0ddf079d2918d72e8781d3af009c87e6058563591dfd6ee0117b7df5534b2",
            id: "b394e2a8b5c2d20a72ed288408b8f0d48aed922edbee6e16c1c5b0e67517214c",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AcATpmcMU1tmLDX7TzR3wXop4tfLFR21Lf",
            senderPublicKey: "03343930630f8235c2b3ae9ba013dbecd4d8bfc999d34bda33e18c8caf43772f1f",
            timestamp: 0,
            asset: {
                votes: ["+03343930630f8235c2b3ae9ba013dbecd4d8bfc999d34bda33e18c8caf43772f1f"],
            },
            signature:
                "3045022100bdb87894846eccc5a5473edaee1e6dca5f3469963e22f06123b6bde195aede0e02203d0c6833e87c5e60f4597ce624d4c2502a0562b4e54d943f82a4889e3cd69532",
            id: "6a399099bac6c74fa5e956512ef8b3a39f6f946d5d6996f192c2f1dd5ba172dc",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "ALHDQyTm7wALtwjmKwEejZjq7f6u6w5xCv",
            senderPublicKey: "02c1151ab35e371a333e73f72e9971cfc16782e421186cfff9325d3c3b9cf91751",
            timestamp: 0,
            asset: {
                votes: ["+02c1151ab35e371a333e73f72e9971cfc16782e421186cfff9325d3c3b9cf91751"],
            },
            signature:
                "304402200785771ccf1a6a40b51183a190d4cb4ce76b9ffd4c2c736d7724e6c667113d020220649ecfe73017d8dda96a7914793470ee7e582693e4866df123b1032194c163b1",
            id: "f20a831a6bae0a85470e308fb66517e70db479657459f6bb39f2cd1783c565e6",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "ARMEiPQE55CfHfR8WmosiFykTAPGYUyYJv",
            senderPublicKey: "0287a12b336fc781f2621aeb703ae47feca4d3ba6f30625f09ba03d225be6ee2bb",
            timestamp: 0,
            asset: {
                votes: ["+0287a12b336fc781f2621aeb703ae47feca4d3ba6f30625f09ba03d225be6ee2bb"],
            },
            signature:
                "3044022020b79e1f07bcb17cae9485b9f44e9f583ca235da4ddd363b905fafb884347f71022015a20481b43720ddb3b1e3ca64b1f47e59b5cc2016a62f43327ca14533384dd4",
            id: "7a1285be87dca9718bece5b84266c1bf6801a39cc111d534e660aef9e6d26929",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AcmXmomxpP8NahbbFivq32QmLuKFkTkqRg",
            senderPublicKey: "0311077c86a98b67850e7ed2c81775d094cf81c6991082ddc33fc7be5347dc765d",
            timestamp: 0,
            asset: {
                votes: ["+0311077c86a98b67850e7ed2c81775d094cf81c6991082ddc33fc7be5347dc765d"],
            },
            signature:
                "3045022100b1615d16763c46d42ca2aae967f04c1c07c119b5af7a378c262ba85515a8d35002202cf7df91676cd137943720e93f06c11907412a6bdc5ef2157cf536a203cf83a3",
            id: "76fb5a1de90f245b1eeb79cb11c7bea7c8b738add0fb8cd95191186a944b0229",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AHXtmB84sTZ9Zd35h9Y1vfFvPE2Xzqj8ri",
            senderPublicKey: "02ad799c6bd670746892bd4331e1aebada26a2cc3ccaf0fde1e94942b20066b05a",
            timestamp: 0,
            asset: {
                votes: ["+02ad799c6bd670746892bd4331e1aebada26a2cc3ccaf0fde1e94942b20066b05a"],
            },
            signature:
                "3045022100e3c7b5d6a72acde4d22e8c1c6cd864c549deba89683f4b84320407d6c380827c02202da57df0ab7cd381b776bdf85802aed371e7cea7269a84f911b1d8e9956badee",
            id: "8da75c8100e6248ab37cc92f72ed9facec3067f4f82f03db8bb8063791463fb3",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AU8hpb5QKJXBx6QhAzy3CJJR69pPfdvp5t",
            senderPublicKey: "03ba0fa7dd4760a15e46bc762ac39fc8cfb7022bdfef31d1fd73428404796c23fe",
            timestamp: 0,
            asset: {
                votes: ["+03ba0fa7dd4760a15e46bc762ac39fc8cfb7022bdfef31d1fd73428404796c23fe"],
            },
            signature:
                "304402205779b5d8acbfedfc105fedb6fcbd4636713ed27605faa9bd988598072640a958022042d8a8b3d7910c7c385f3707a317c5d445d56da250f8d127c71df2d9d4c5d86e",
            id: "fd26e265be88289828d0ce7ffc5faeb9849e1f4cb37a8f1dd5d6fcc436d910b7",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AQBo4exLwyapRiDoDteh1fF2ctWWdxofSf",
            senderPublicKey: "034985f6f2167cc8c9df1204aaf6744bc97c0d7f3c07c43ee6c0978bc91b6c680e",
            timestamp: 0,
            asset: {
                votes: ["+034985f6f2167cc8c9df1204aaf6744bc97c0d7f3c07c43ee6c0978bc91b6c680e"],
            },
            signature:
                "3045022100e18a89fe1fe0a8acaca2b6461314e784ffebbe7374f6aafdb06934e83985ccbf022027314b21a4a25b477bd7cc070b4e00ef8f3d69f3f1af028b96571dc245924c00",
            id: "41d92e128e6b8367cbf8fd111e5263d52e1abad553653f975dd60d7f7c5b637b",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AWHGbGaz5FgvyChuAfWFmKY2LsbcwqPYL9",
            senderPublicKey: "02dcb87d64ee2fdc6c2bcecdd841ad8e3b3163599214a818924fd433a8ffe7daf9",
            timestamp: 0,
            asset: {
                votes: ["+02dcb87d64ee2fdc6c2bcecdd841ad8e3b3163599214a818924fd433a8ffe7daf9"],
            },
            signature:
                "304402201c614c84dbae26f87973c9e2b38df883fe0c8c469080e31fe32a4c4946d50b67022075b8fb498fb1384aa6be785845da02813185ccf095597b5782618033828af4d5",
            id: "1e4a1f8aab6fbf8682c2b35e0d04e9e007ae717ce3f4a82894747e5807e3c759",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AeooqGMJPE5UWRPkKW6kgLGZu3898vcLPV",
            senderPublicKey: "02c39e352d0f3c4ea19842a5bca3114b4247cd56da72157963a5873ecfcd824aca",
            timestamp: 0,
            asset: {
                votes: ["+02c39e352d0f3c4ea19842a5bca3114b4247cd56da72157963a5873ecfcd824aca"],
            },
            signature:
                "3045022100b1ee6becc59d594776a40e5b3caec82390d273b703ecb0d7caece44953141449022016543cc29a28882845118afab6e51296cd216bc662260c28e5efd9597b6025b1",
            id: "2ce068bfccb3f967f4004e9a1e81614a738e55e45c80114c0af30a085f71a2e9",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AWtD9W5LCv2TH3VcdzbGQBGaJBwvbzZNDQ",
            senderPublicKey: "022ebb110e9630377073d4f0e32897a5928a2c71f2941fb6d4b71251dbd62da98c",
            timestamp: 0,
            asset: {
                votes: ["+022ebb110e9630377073d4f0e32897a5928a2c71f2941fb6d4b71251dbd62da98c"],
            },
            signature:
                "3044022036698a329d7f5f751f91ce02bc188a7527a377d01583b70427cfce64def945ec022079afafea10aa32394a1e42a80577de3869856656221d5f259e05fb44f01668b8",
            id: "3478d1ad3655e10fcc864f191972322c866616866bb1dbf66d7b66b31cd95de6",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AH39inbLsUBhC3k29NcvQP3zKZWnsQksvA",
            senderPublicKey: "03d27324bd4829f57d549bdb273bfd666d88f43d8429ba9a42a4fa1c9bd1032a24",
            timestamp: 0,
            asset: {
                votes: ["+03d27324bd4829f57d549bdb273bfd666d88f43d8429ba9a42a4fa1c9bd1032a24"],
            },
            signature:
                "3044022035fa7be80cf881eefefc12b11de04ffb2e2e92815cf05074afef54a3c5b2eccb022041f3347f59db0b3caadefcbfbc5ae275d3fe3e2a52fe1504b23628d4b79a43bf",
            id: "8adfd8e73e96188ed9fdec459d88db1fb041a2b25b3f64830476aec661ae5010",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "ANRNMPjQjJGVsVbyeqwShcxKTidYJ2S1Hm",
            senderPublicKey: "021770413ad01c60b94e1d3ed44c00e0145fe7897e40f5f6265e220f4e65cf427f",
            timestamp: 0,
            asset: {
                votes: ["+021770413ad01c60b94e1d3ed44c00e0145fe7897e40f5f6265e220f4e65cf427f"],
            },
            signature:
                "30440220630da8a73979bd3988b7f84fe9e83a429cf3239f54c140c3dbcc407140513fc002203664ad54ed9f199f2683479b988bd97ad8fffb2c2d5dfdbdb10858aca4abfaca",
            id: "e306328ffefcd9e3809e7390a358199a62cf8ef037d57af1f5c7b54d728d427e",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "ASqzCDRS5cTBwCmC5moQ34W4QZhtrj4pT1",
            senderPublicKey: "02af50fcb5183b3f2c468fb4e75e573a6bf0a048a6fab095df6d70f9f91fd6651b",
            timestamp: 0,
            asset: {
                votes: ["+02af50fcb5183b3f2c468fb4e75e573a6bf0a048a6fab095df6d70f9f91fd6651b"],
            },
            signature:
                "304402206f1df93f299ffedacc25aa201807df47d32c43369315cf9db280963c357be56302206a66acd553710f49bbb7b803a2bcb71128c8e617ffce66b37b7c968817349247",
            id: "dc69bc8f78502ba34655ed062987788939189709a4112760cd8807245d7461f5",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AHysG9CfbXvHtxev9eziTK8WUbnFKKLFR8",
            senderPublicKey: "03c74d53dcfef0d79f249a812e95c1a58040b769867df036639f0c107d3b577b12",
            timestamp: 0,
            asset: {
                votes: ["+03c74d53dcfef0d79f249a812e95c1a58040b769867df036639f0c107d3b577b12"],
            },
            signature:
                "30440220629e696a10e04d4fbc10a5ac443bf9bd40dd5d89d4b214224abe47d7ab5600340220643f361a24d9916e2c5aaec7bd7d8a6a0d3ffc5fc0b62c3ac4906eb799a862fa",
            id: "c3f49fb80c40f7779b32ba23616f5573a6ba58fc60c4629c2252933038dd89f0",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AZuvQC5WuVpPE9jwMCJcA28X5e7Ni32WY2",
            senderPublicKey: "0345ef2a1e4f64707044ba600efdc72aaad281c5a73195f930527c54d7cc891904",
            timestamp: 0,
            asset: {
                votes: ["+0345ef2a1e4f64707044ba600efdc72aaad281c5a73195f930527c54d7cc891904"],
            },
            signature:
                "30440220660f9604896dad2a97820b0d7524f0bce5a8b5766f150517d5061fd02bddf768022055e87c25891d4480e66e5d1a71e42cd5a4bef3ab2b2651cd72d44f30a4b32309",
            id: "8e8ac1b1a586e86867abbf25d63387bb6dfb793c691f0b06333c1581a9a568b3",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AMfyf9iRjXiKNcLQVTUE9oCESUPzmQ6iUT",
            senderPublicKey: "034776bd6080a504b0f84f8d66b16af292dc253aa5f4be8b807746a82aa383bd3c",
            timestamp: 0,
            asset: {
                votes: ["+034776bd6080a504b0f84f8d66b16af292dc253aa5f4be8b807746a82aa383bd3c"],
            },
            signature:
                "304402202e2ad64129f61ef1156c4c7e80ab862d4823d62dac502685f53028536ddfb41a02201a3ec777fdfe8fae9f7cd5251fac322c1b6a2a4d41b3ec456daed474986d4872",
            id: "ff73565c373f2cefebf86c72dda3a6a6205750eb03b69178cb83378620715e1d",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AFyf2qVpX2JbpKcy29XbusedCpFDeYFX8Q",
            senderPublicKey: "02f7acb179ddfddb2e220aa600921574646ac59fd3f1ae6255ada40b9a7fab75fd",
            timestamp: 0,
            asset: {
                votes: ["+02f7acb179ddfddb2e220aa600921574646ac59fd3f1ae6255ada40b9a7fab75fd"],
            },
            signature:
                "304402202e5c78cf21a088db10e1e1f64d98d84c8d3294fde7bc322d4af06bfe99d4c2e302207e7912a16a37b641a9f8c7c722f2b0d699917ca73e4d0f21584b717fb7f02f13",
            id: "3822273b496f2e253081cedf382e4f9937713fabb83449e1f892377cf536e68a",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AG8kwwk4TsYfA2HdwaWBVAJQBj6VhdcpMo",
            senderPublicKey: "0377f81a18d25d77b100cb17e829a72259f08334d064f6c887298917a04df8f647",
            timestamp: 0,
            asset: {
                votes: ["+0377f81a18d25d77b100cb17e829a72259f08334d064f6c887298917a04df8f647"],
            },
            signature:
                "3045022100a65ce45164c9bc3e018e26703370c9deb2933ee3b4e814619043cc37c4a39c4802205ae4931ac9e8dffd714c3b601fe248a49c0185c8367887205f497d951c52eb54",
            id: "430d6db0b87c25dce4ce14ac907c13bcc6efa5d95135f05aa4ba7596ea9d400c",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AW8n3yvSAqUJkyfcG5u3bgRxsNKzXYPamN",
            senderPublicKey: "036f612457adc81041662e664ca4ae64f844b412065f2b7d2f9f7d305e59c908cd",
            timestamp: 0,
            asset: {
                votes: ["+036f612457adc81041662e664ca4ae64f844b412065f2b7d2f9f7d305e59c908cd"],
            },
            signature:
                "3045022100f3cdd7f688ad2d7b6a5b9cc7e793cb8a6e6e07d3327bc67add64691a53fd2911022026ae1adc8f4fcfc01bcca3efc83019026755b443a504265ad1f46f69d1f5951c",
            id: "dda86ecc0332e6c4eed1c0a5af7424374089b85dd274a300fed51b86e2655587",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AdWRsk7Lbo97jxGBKzLAFwevVHbqVbW1Cj",
            senderPublicKey: "03691178f8610d0a295e650201b62345056c788d7f9ac7e8570b69c6c90091b564",
            timestamp: 0,
            asset: {
                votes: ["+03691178f8610d0a295e650201b62345056c788d7f9ac7e8570b69c6c90091b564"],
            },
            signature:
                "3045022100d419072a752acd55792257c96099fb14c56c29112a00535d39bca96fbd7951c902201abdf4db247dc956d79f4543c389823fbd1a9337f95d30df39603a3b52486bfb",
            id: "0998e9a055c53bf6697ee76af94c7a830c1364016d78fce889a21bc38ed70cd5",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AV6GP5qhhsZG6MHb4gShy22doUnVjEKHcN",
            senderPublicKey: "022f2978d57f95c021b9d4bf082b482738ce392bcf6bc213710e7a21504cfeb5a0",
            timestamp: 0,
            asset: {
                votes: ["+022f2978d57f95c021b9d4bf082b482738ce392bcf6bc213710e7a21504cfeb5a0"],
            },
            signature:
                "3045022100ba1e0ab761326d2a53cbda2a4a5135033c94d8166864d2ad3ceb963b4a0c046402207d755ecf4ada9fa2a598fd75e73a59d30cb83e01f510020b48b6bf162dc60b27",
            id: "be13743deb8486a575d1fb564d2b07d797ac77148d35793c9aca43c0d47aad61",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AaUgne8txmQB1iBboiFVLVHwLaYChZiFVA",
            senderPublicKey: "03e59140fde881ac437ec3dc3e372bf25f7c19f0b471a5b35cc30f783e8a7b811b",
            timestamp: 0,
            asset: {
                votes: ["+03e59140fde881ac437ec3dc3e372bf25f7c19f0b471a5b35cc30f783e8a7b811b"],
            },
            signature:
                "3044022038a491e2e13ac32025209d00aec1af31b73a8b6ee77ad9b8bb80a34f5df59dfc02200ce82c89fe9f88bd5af236ceeaa80f9954e3fb4af7bc884c447505751d49c134",
            id: "f1d3d44cc289837de9623cba8891a1ed1cde8918473a91e2daead29975afad22",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "Ac9dCo9dFgAkkBdEBsoRAN4Mm6xMsgYdZx",
            senderPublicKey: "0363550e2a3fe2153526effd4302045fa2c3027d0d9b30b19821a4870c8cb134bc",
            timestamp: 0,
            asset: {
                votes: ["+0363550e2a3fe2153526effd4302045fa2c3027d0d9b30b19821a4870c8cb134bc"],
            },
            signature:
                "304402202ae599ce389cd030b8ab48ef53113458b9ba8bf9c9ed09c662eba2849bf540f802202ed63f8af492dd0b67d1b451170a989418a42466a3a7ffe89c4c5a18337e8fb9",
            id: "65ab302a44ea7550891eabc3b4a8d5ecbcb80784c4666195d5d0b7e33394300d",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AdXbS4GKvV6TZVHrNzcYSQKfpenQnFGTxK",
            senderPublicKey: "026c598170201caf0357f202ff14f365a3b09322071e347873869f58d776bfc565",
            timestamp: 0,
            asset: {
                votes: ["+026c598170201caf0357f202ff14f365a3b09322071e347873869f58d776bfc565"],
            },
            signature:
                "304502210088a3a4e82d307c238e01ce154b57631d4429e0b591e828ec36839a783736e842022042c6e1d719781e2edca3dbfe84ad13b9e490821a47ccadfcff379decb9c873c0",
            id: "d26a7ea56f398634a81086bb15c2f0c863c71b8bd728304d324d8245a8fb6c73",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AReCSCQRssLGF4XyhTjxhQm6mBFAWTaDTz",
            senderPublicKey: "032c51f895ccdafae44e68baf283c50605d3f7dbba1c48011c6577383791f4a374",
            timestamp: 0,
            asset: {
                votes: ["+032c51f895ccdafae44e68baf283c50605d3f7dbba1c48011c6577383791f4a374"],
            },
            signature:
                "3045022100ae5805541f085a50076835422b2581d3b7a128a05b4f068ad7e3c14cd02799b802205f4bb40e06f90e02282ae74c0aba97923e601fd78234b9585468c4fb73f47893",
            id: "02504eae7ff4963c081219523bc48d7a07de4c29fdc1622224547f9a7c133abf",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "ASEJEDLfTxy6upQDWTuYucoVwMUcmhSGhp",
            senderPublicKey: "03832487ab0aa9450a4c223999bf4311b7b65c50c06baa90d19d4f65c27bfeeb93",
            timestamp: 0,
            asset: {
                votes: ["+03832487ab0aa9450a4c223999bf4311b7b65c50c06baa90d19d4f65c27bfeeb93"],
            },
            signature:
                "3044022078d38cabd8f427ef381d0aa6a0b98c6a590cb18f47acc1d80b429a1c1959b0ab022022a70d4d93d650ca3121dde6065e80cd90d1e2e91cb90f0d0b2eadde609e0d75",
            id: "addb8c1baa833baa52a5b51d8a86f8524bde826b5c9f0a99e57070e6323e1dfc",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "ARAibxGqLQJTo1bWMJfu5fCc88rdWWjqgv",
            senderPublicKey: "038082dad560a22ea003022015e3136b21ef1ffd9f2fd50049026cbe8e2258ca17",
            timestamp: 0,
            asset: {
                votes: ["+038082dad560a22ea003022015e3136b21ef1ffd9f2fd50049026cbe8e2258ca17"],
            },
            signature:
                "3044022076dd065e3fba825b77884a179d0231d7fc9e7d3a02e34bc6565fab81a84e559e02200a880c028e690a9d6f2c4c6576b1bf3e913817c834da8ec6afdbadfae78d341d",
            id: "72f31f9a829b93045ef2e860b24c33b9be6a2621c26914acd42121215c1d517e",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "APRiwbs17FdbaF8DYU9js2jChRehQc2e6P",
            senderPublicKey: "030a9321ff83e384aef559e6030008c23a137e3b3c5d45028e46cccbaafce772b1",
            timestamp: 0,
            asset: {
                votes: ["+030a9321ff83e384aef559e6030008c23a137e3b3c5d45028e46cccbaafce772b1"],
            },
            signature:
                "304402205261d9d8ded6364fda8b10bd477982be84990cb010f9214d52c492676814e1f40220489f441ffe2478d361a12ab96caa59da495fe62d61d0e2255aa5ec4ed789afb8",
            id: "1f17b4ba072d205761ed3f786491eaf684ed3601b69082e487e568aa74a319e8",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AbfQq8iRSf9TFQRzQWo33dHYU7HFMS17Zd",
            senderPublicKey: "02def27da9336e7fbf63131b8d7e5c9f45b296235db035f1f4242c507398f0f21d",
            timestamp: 0,
            asset: {
                votes: ["+02def27da9336e7fbf63131b8d7e5c9f45b296235db035f1f4242c507398f0f21d"],
            },
            signature:
                "3044022040219da41054a3eebd3122df7f09a62a4e8b4fdc287ae77221f2217b42f291ad02202b9a70c54bb546a604eafadcc086ef6b6570f57542374d87de02ad7f61fe51a4",
            id: "5fa837023159d6a3d6cf7c5b2ed6fe05ff7df19300226b2f0be5a48a06993780",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "ANBkoGqWeTSiaEVgVzSKZd3jS7UWzv9PSo",
            senderPublicKey: "03287bfebba4c7881a0509717e71b34b63f31e40021c321f89ae04f84be6d6ac37",
            timestamp: 0,
            asset: {
                votes: ["+03287bfebba4c7881a0509717e71b34b63f31e40021c321f89ae04f84be6d6ac37"],
            },
            signature:
                "3045022100ded426768f114f459485ba6ae293c9649b340cf2dcb15e8e887fbb5fed6f7e0b0220752297022de6e93ff64bb9e07b4efef8e946cd2872f84d9e1cb3165ff5c342cb",
            id: "0a16dc31514629a36d7237968ada6a95d6cbec027b7d26e1e0f0d7d4febe9494",
        },
        {
            type: 3,
            amount: Utils.BigNumber.make(0),
            fee: Utils.BigNumber.make(0),
            recipientId: "AJjv7WztjJNYHrLAeveG5NgHWp6699ZJwD",
            senderPublicKey: "02275d8577a0ec2b75fc8683282d53c5db76ebc54514a80c2854e419b793ea259a",
            timestamp: 0,
            asset: {
                votes: ["+02275d8577a0ec2b75fc8683282d53c5db76ebc54514a80c2854e419b793ea259a"],
            },
            signature:
                "304402203aa292e7aedcd62bb5a79c2521b666b8e1886b57923d98f51911b0461cfdb5db0220539657d5c1dcb78c2c86376da87cc0db428e03c53da3f4f64ebe7115998f00b6",
            id: "8816f8d8c257ea0c951deba911266394b0f2614df023f8b4ffd9da43d36efd9d",
        },
    ],
    height: 1,
    id: "17184958558311101492",
    blockSignature:
        "304402202fe5de5697fa25d3d3c0cb24617ac02ddfb1c915ee9194a89f8392f948c6076402200d07c5244642fe36afa53fb2d048735f1adfa623e8fa4760487e5f72e17d253b",
};
