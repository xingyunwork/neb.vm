const SandboxedModule = require('sandboxed-module');



const _native_storage_handlers = require('../native/_native_storage_handlers');
const NativeStorage = require('../native/NativeStorage');

const LocalContractStorage = SandboxedModule.require('../lib/1.0.0/storage', {
    locals: {
        // BigNumber: BigNumber,
        NativeStorage: NativeStorage,
        _native_storage_handlers: _native_storage_handlers
    }
});

module.exports = LocalContractStorage.lcs;
