const SandboxedModule = require('sandboxed-module');

const BigNumber = require('./bignumber');
const _native_blockchain = require('../native/_native_blockchain');
const Blockchain = SandboxedModule.require('../lib/1.1.0/blockchain', {
    locals: {
        BigNumber: BigNumber,
        _native_blockchain: _native_blockchain
    }
});


// var block = {
//     timestamp: 0,
//     height: 1
// };
//
// var transaction = {
//     hash: "2933836c3a56ddd789464c7bd3fd92bdb1c974ac62f7b38a34bc48eb33679f52",
//     from: "n1dAmstUGQ3YB4EVokmRdrvvVCNfJVU5WuS",
//     to: "n1dAmstUGQ3YB4EVokmRdrvvVCNfJVU5WuS",
//     value: "10",
//     nonce: 1,
//     timestamp: 1527077193,
//     gasPrice: "1000000",
//     gasLimit: "20000"
// };
//
// Blockchain.blockParse(JSON.stringify(block));
// Blockchain.transactionParse(JSON.stringify(transaction));

module.exports = Blockchain;
