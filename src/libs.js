"use strict";
// const isNode = function () { try { return this === global } catch (e) { return false } }
// const isBrowser = function () { try { return this === window } catch (e) { return false } }

let LIBS = {};

if(process.env.BROWSER_ENV){
    Object.assign(LIBS, {
        BigNumber: require('./lib/1.0.0/bignumber'),
        Event: require('./lib/1.0.0/event'),
        Blockchain: require('./lib/1.1.0/blockchain'),
        LocalContractStorage: require('./lib/1.0.0/storage').lcs,
        Uint: require('./lib/1.0.5/uint'),
        Crypto: require('./lib/1.0.5/crypto'),
    });
}
else{
    Object.assign(LIBS, {
        BigNumber: require('./node/bignumber'),
        Event: require('./node/event'),
        Blockchain: require('./node/blockchain'),
        LocalContractStorage: require('./node/local-contract-storage'),
        Uint: require('./node/uint'),
        Crypto: require('./node/crypto'),
    });
}

LIBS.Blockchain && (function (Blockchain) {

    var block = {
        timestamp: 0,
        height: 1
    };

    var transaction = {
        hash: "2933836c3a56ddd789464c7bd3fd92bdb1c974ac62f7b38a34bc48eb33679f52",
        from: "n1dAmstUGQ3YB4EVokmRdrvvVCNfJVU5WuS",
        to: "n1dAmstUGQ3YB4EVokmRdrvvVCNfJVU5WuS",
        value: "0",
        nonce: 1,
        timestamp: 1527077193,
        gasPrice: "1000000",
        gasLimit: "20000"
    };

    Blockchain.blockParse(JSON.stringify(block));
    Blockchain.transactionParse(JSON.stringify(transaction));

})(LIBS.Blockchain);


module.exports = LIBS;
