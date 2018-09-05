const SandboxedModule = require('sandboxed-module');

const BigNumber = require('./bignumber');
module.exports = SandboxedModule.require('../lib/1.0.5/uint', {
    locals: {
        BigNumber: BigNumber
    },
});
