const NVM = require('../src/nvm');
const { expect } = require('chai');

describe('blockchain', function() {

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

    describe('verifyAddress', function() {

        it('should return true when address is valid', function() {
            const source = `'use strict';
                var Contract = function() {};
                Contract.prototype = {
                    init: function(){},
                    testVerifyAddress(address){
                        return Blockchain.verifyAddress(address);
                    }
                };            
                module.exports = Contract;
            `;

            nvm.deploy(source, JSON.stringify([]));
            let result = nvm.run(source, 'testVerifyAddress', JSON.stringify(['n1F8QbdnhqpPXDPFT2c9a581tpia8iuF7o2']));
            expect(result).to.equal(true);

        });


    });



});
