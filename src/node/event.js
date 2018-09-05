const SandboxedModule = require('sandboxed-module');

const _native_event_trigger = require('../native/_native_event_trigger');
const Event = SandboxedModule.require('../lib/1.0.0/event', {
    locals: {
        _native_event_trigger: _native_event_trigger
    },
});

module.exports = Event;
