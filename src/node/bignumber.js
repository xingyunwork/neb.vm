const SandboxedModule = require('sandboxed-module');

const BigNumber = SandboxedModule.require('../lib/1.0.0/bignumber', {
    locals: {
        'GlobalVars': require('../native/GlobalVars')
    },
});

module.exports = BigNumber;
