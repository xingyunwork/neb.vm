const NVM = require('../src/nvm');
const { expect } = require('chai');

describe('no-eval', function() {

    let nvm = null;

    before(function() {

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

        nvm = new NVM(block, transaction);
    });

    describe('newFunction', function() {

        it('should return EvalError when call new Function in contract', function() {
            const source = `'use strict';
                var TestContract = function () {};
                TestContract.prototype = {
                    init: function () {
                        return new Function('return 1+1');
                    }
                };
                module.exports = TestContract;
            `;
            try {
                let result = nvm.deploy(source, JSON.stringify(['']));
                expect(result).to.equal('EvalError: Code generation from strings disallowed for this context');
            }
            catch (e) {
            }
        });

    });



});
