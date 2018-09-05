"use strict";

const Account = require("./account");
const localStorage = require('./localStorage');

var transfer = function(to, value) {
    // TODO: mock the transfer func in nebulas
    return 0;
};

var verifyAddress = function(address) {
    return Account.isValidAddress(address);
    // return true;
};

var getContractSource = function(address) {
    return localStorage.getItem(address);
};

var runContractSource = function(address, func, value, args) {
    let source = localStorage.getItem(address);
    const vm = require('./vm.js');
    return JSON.stringify(vm.run.call(this, source, func, args));
};

module.exports = {
    transfer: transfer,
    verifyAddress: verifyAddress,
    getContractSource: getContractSource,
    runContractSource: runContractSource
};
