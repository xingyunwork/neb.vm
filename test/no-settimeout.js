const NVM = require('../src/nvm');
const { expect } = require('chai');

describe('no-settimeout', function() {

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

        it('should return error when call setTimeout function in contract', function() {
            const source = `'use strict';
                var TestContract = function () {};
                TestContract.prototype = {
                    init: function () {
                        setTimeout(function(){}, 100);
                    }
                };
                module.exports = TestContract;
            `;
            try {
                nvm.deploy(source, JSON.stringify(['']));
                expect(false).to.be.true;
            }
            catch (e) {
                expect(e.message).to.equal('ReferenceError: setTimeout is not defined');
            }
        });

        it('should return error when call setInterval function in contract', function() {
            const source = `'use strict';
                var TestContract = function () {};
                TestContract.prototype = {
                    init: function () {
                        setInterval(function(){}, 100);
                    }
                };
                module.exports = TestContract;
            `;
            try {
                nvm.deploy(source, JSON.stringify(['']));
                expect(false).to.be.true;
            }
            catch (e) {
                expect(e.message).to.equal('ReferenceError: setInterval is not defined');
            }
        });

    });



});
