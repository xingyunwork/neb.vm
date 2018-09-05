// const SandboxedModule = require('sandboxed-module');
//
// const Contract = SandboxedModule.require('../contracts/BankVaultContract', {
//     locals: {
//
//     },
// });
//
// const contract = new Contract();
//
// console.log(contract.game(0));


// const Blockchain = require('../../src/blockchain');

const NVM = require('../../src/nvm');

const nvm = new NVM();

// console.log(nvm);

const contract_address = 'n1QZMXSZtW7BUerroSms4axNfyBGyFGkrh5';

nvm.deploy(`
'use strict';
var Contract = function() {
};
Contract.prototype = {
    init: function(){
    },
    save(key, value) {
        console.log('====save====');
        console.log(key, value);
    },
    get(key, value) {
        return key+':'+value;
    }
};
module.exports = Contract;`,
    JSON.stringify([]),
    contract_address
);



const source = `
'use strict';
var Contract = function() {};
Contract.prototype = {
    init: function(){
        return 1;
    },
    testContract(address) {
        var contract  = new Blockchain.Contract(address);
        //contract.value(20000000000000000).call('save', 'key', 'value');
        return contract.call('get', 'key', 'value')
    }
};
module.exports = Contract;`;

nvm.deploy(source, JSON.stringify([]));


// console.log(
//     Blockchain.nativeBlockchain.getContractSource('n1QZMXSZtW7BUerroSms4axNfyBGyFGkrh5')
// );

// Blockchain.nativeBlockchain.getContractSource('n1QZMXSZtW7BUerroSms4axNfyBGyFGkrh5')

console.log(
    nvm.run(source, 'testContract', JSON.stringify([contract_address]))
);

