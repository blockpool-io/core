"use strict";

/*
Test summary :
We want to test that the multisig transactions work as expected.

Workflow :
- step 0 : we just pick from genesis wallet what we need for our test, sending it to a new wallet
- step 1 : we create and send the multisig registration transaction
- step 2 : we check that the registration transaction was forged
- step 3 : we transfer funds to the multisig wallet
- step 4 : we send the htlc lock transaction (multisigned)
- step 5 : we send the htlc refund transaction (multisigned)
- step 6 : we check that valid multisigned transactions were forged and invalid were not
*/

module.exports = {
    events: {
        newBlock: {
            8: ["0.transfer-new-wallet.action"],
            11: ["1.create-multisig-registration.action"],
            14: ["2.check-registration.test"],
            15: ["3.transfer-multisig-wallet.action"],
            18: ["4.create-lock-multisig-txs.action"],
            78: ["5.create-refund-multisig-txs.action"],
            81: ["6.check-multisig.test"],
        },
    },
};
