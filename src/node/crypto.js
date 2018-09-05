const SandboxedModule = require('sandboxed-module');

const _native_crypto = require('../native/_native_crypto');
const Crypto = SandboxedModule.require('../lib/1.0.5/crypto', {
    locals: {
        _native_crypto: _native_crypto
    }
});

module.exports = Crypto;
