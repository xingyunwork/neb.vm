"use strict";

var item = function(text) {
    if (text) {
        var obj = JSON.parse(text);
        this.key = obj.key;
        this.value = obj.value;
        this.author = obj.text;
    } else {
        this.key = "";
        this.author = "";
        this.value = "";
    }
};

item.prototype = {
    toString: function () {
        return JSON.stringify(this);
    }
};

var kvStore = function () {
    LocalContractStorage.defineMapProperty(this, "repo", {
        parse: function (text) {
            return new item(text);
        },
        stringify: function (o) {
            return o.toString();
        }
    });
};

kvStore.prototype = {
    init: function () {
        // todo
    },

    save: function (key, value) {
        console.log("reach child contract");

        key = key.trim();
        value = value.trim();
        if (key === "" || value === ""){
            throw new Error("empty key / value");
        }
        if (value.length > 128 || key.length > 128){
            throw new Error("key / value exceed limit length")
        }

        var from = Blockchain.transaction.from;
        var item = this.repo.get(key);

        if (item){
            throw new Error("value has been taken");
        }

        item = new item();
        item.author = from;
        item.key = key;
        item.value = value;
        this.repo.put(key, item);
    },

    get: function (key) {
        key = key.trim();
        if ( key === "" ) {
            throw new Error("empty key")
        }
        return this.repo.get(key);
    },

    throwErr: function() {
        throw("err for test");
    }
};
module.exports = kvStore;
