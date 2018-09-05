"use strict";
const localStorage = require('./native/localStorage');

const NVM = function (block, transaction) {
    // extend(native.context.block, block);
    // extend(native.context.transaction, transaction);
    // Blockchain.blockParse(JSON.stringify(native.context.block));
    // Blockchain.transactionParse(JSON.stringify(native.context.transaction));
};

NVM.prototype = {
    deploy: function(source, args, contract_address) {
        if(contract_address){
            localStorage.setItem(contract_address, source);
        }
        return this.run(source, "init", args);
    },
    call: function(source, func, args) {
        if (funcRegex.test(func)) {
            return this.run(source, func, args);
        } else {
            throw new Error("invalid func");
        }
    },
    run: function(source, func, args) {
        const vm = require('./native/vm.js');
        return vm.run.call(this, source, func, args);
    }
};

module.exports = NVM;
