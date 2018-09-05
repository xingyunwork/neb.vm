const NVM = require('../src/nvm');
const { expect } = require('chai');

describe('function-contract', function() {

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

    describe('deploy', function() {

        it('should return undefined when deploy function contract', function() {
            const source = `'use strict';
                var TestContract = function () {};
                TestContract.prototype = {
                    init: function () {}
                };
                module.exports = TestContract;
            `;
            const result = nvm.deploy(source, JSON.stringify(['']));
            expect(result).to.be.undefined;
        });

        it('should return undefined when deploy class contract', function() {
            const source = `'use strict';
                class TestContract {
                    init() {}
                }
                module.exports = TestContract;
            `;
            const result = nvm.deploy(source, JSON.stringify(['']));
            expect(result).to.be.undefined;
        });

    });



});
