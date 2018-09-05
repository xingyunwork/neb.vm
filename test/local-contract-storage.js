const NVM = require('../src/nvm');
const { expect } = require('chai');

describe('local-contract-storage', function() {

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

    describe('defineProperties', function() {

        it('should return 27 when height is 3 and width is 9', function() {
            const source = `'use strict';
                var TestContract = function () {
                    LocalContractStorage.defineProperties(this, {
                        height: null,
                        width: null,
                    });
                };
                TestContract.prototype = {
                    init: function (height, width) {
                        this.height = height;
                        this.width = width;
                    },
                    calcArea: function(){
                        return this.height * this.width;
                    }
                };
                module.exports = TestContract;
            `;

            nvm.deploy(source, JSON.stringify([3, 9]));
            let area = nvm.run(source, 'calcArea', JSON.stringify([]));
            expect(area).to.equal(3*9);

        });


    });



});
