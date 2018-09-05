// const Blockchain = require('../../src/node/blockchain');

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

// const nvm = new NVM(block, transaction);
// nvm.deploy(source, JSON.stringify([]));

const { Blockchain }= require('../../src/libs');

console.log( Blockchain.transaction.from );
console.log( Blockchain.verifyAddress('n1QZMXSZtW7BUerroSms4axNfyBGyFGkrh5') );
console.log( Blockchain.verifyAddress('n2QZMXSZtW7BUerroSms4axNfyBGyFGkrh5') );


