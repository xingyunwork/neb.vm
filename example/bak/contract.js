'use strict';

var proxyKvStore = function() {
};

proxyKvStore.prototype = {
    init: function() {
        //
    },


    save: function(address, key, value) {
        var kvStore  = new Blockchain.Contract(address);
        kvStore.value(20000000000000000).call("save", key, value);
    },

    get: function(address, key) {
        var kvStore = new Blockchain.Contract(address);
        return kvStore.call("get", key);
    },
}

module.exports = proxyKvStore;
