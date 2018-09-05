const fs = require('fs');
const path = require('path');
let kvStoreSource = fs.readFileSync(path.resolve(__dirname, '../contracts/kvStore.js'), 'utf-8');
let proxyKvStoreSource = fs.readFileSync(path.resolve(__dirname, '../contracts/proxyKvStore.js'), 'utf-8');

const NVM = require('../../src/nvm');

var block = {
    timestamp: 0,
    height: 1
};

var transaction = {
    hash: "2933836c3a56ddd789464c7bd3fd92bdb1c974ac62f7b38a34bc48eb33679f52",
    from: "n1dAmstUGQ3YB4EVokmRdrvvVCNfJVU5WuS",
    to: "n1dAmstUGQ3YB4EVokmRdrvvVCNfJVU5WuS",
    value: "10",
    nonce: 1,
    timestamp: 1527077193,
    gasPrice: "1000000",
    gasLimit: "20000"
};


const nvm = new NVM(block, transaction);


// const source = `
//
// var Contract = function() {
//
// };
//
// Contract.prototype = {
//     init: function(){},
//     test: function(){
//         return 1;
//     }
// };
//
// module.exports = Contract;
//
// `;

nvm.deploy(kvStoreSource, JSON.stringify([]));

// || `
//
// var Contract = function() {
//
// };
//
// Contract.prototype = {
//     init: function(){},
//     test: function(address){
//         var contract = new Blockchain.Contract(address);
//         return contract.value(0).call("test");
//     }
// };
//
// module.exports = Contract;
//
// `

nvm.deploy( proxyKvStoreSource , JSON.stringify([]), {}, {
    to: 'n1dAmstUGQ3YB4EVokmRdrvvVCNfJVU5WuS'
});



nvm.run(
    proxyKvStoreSource,
    'save',
    JSON.stringify(['n1dAmstUGQ3YB4EVokmRdrvvVCNfJVU5WuS','key','value'])
)

// console.log(
//
//     nvm.run(
//         proxyKvStoreSource,
//         'get',
//         JSON.stringify(['n1dAmstUGQ3YB4EVokmRdrvvVCNfJVU5WuS','key'])
//     )
//
// );



