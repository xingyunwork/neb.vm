const LocalContractStorage = require('../../src/node/local-contract-storage');

function Contract(){

    const Item = function (text) {
        if(text){
            let o = JSON.parse(text);
            this.name = o.name;
        }else{
            this.name = '';
        }
    };

    Item.prototype = {
        toString: function () {
            return JSON.stringify(this);
        }
    };

    LocalContractStorage.defineMapProperty(this, "items", {
        parse: function (text) {
            return new Item(text);
        },
        stringify: function (o) {
            return o.toString();
        }
    });

    this.items.put(
        '1',
        new Item(JSON.stringify({name:'my'}))
    );

    console.log(this.items.get('1'));

}

new Contract();
