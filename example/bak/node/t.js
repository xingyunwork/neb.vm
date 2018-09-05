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


const source = `

var Contract = function() {

};

Contract.prototype = {
    init: function(){},
    test: function(){
        console.log(LocalContractStorage);
        LocalContractStorage.defineMapProperty(this, "repo", {});
        return 1;
    }
};

module.exports = Contract;

`;

nvm.deploy(source, JSON.stringify([]));

console.log(

    nvm.run(
        source,
        'test',
        JSON.stringify([''])
    )

);


