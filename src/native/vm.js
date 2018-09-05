const {
    LocalContractStorage,
    Blockchain,
    Event,
    BigNumber,
    Uint,
    Crypto
} = require('../libs');

function compile(source) {
    const __module__ = { exports: null };

    const context = {};

    (new Function(
        // 'Function',
        // 'eval',
        'setTimeout',
        'setInterval',

        'require',
        'module',
        'BigNumber',
        'Blockchain',
        'LocalContractStorage',
        'Event',
        'Uint'

        , source)).apply(context,
        [
            // function _Function() {
            //     return function () {
            //         return 'Code generation from strings disallowed for this context';
            //     }
            // },
            // function _eval() {
            //     return 'Code generation from strings disallowed for this context';
            // },
            function setTimeout() {
                throw new Error('ReferenceError: setTimeout is not defined');
            },
            function setInterval() {
                throw new Error('ReferenceError: setInterval is not defined');
            },

            function __require__(m) {
                if(m === 'crypto.js' || m === 'crypto'){ return Crypto; }
                return {}
            },
            __module__,
            BigNumber,
            Blockchain,
            LocalContractStorage,
            Event,
            Uint
        ]);

    return __module__.exports;
}

module.exports = {
    compile: compile,
    run: function (source, func, args) {
        if(!source) { return; }

        const Contract = compile(source);
        const contract = new Contract();
        if (args === undefined || args.length === 0) {
            args = "[]";
        }
        if (contract[func] !== undefined) {
            return contract[func].apply(contract, JSON.parse(args));
        } else {
            throw new Error("function not found");
        }
    }
};
