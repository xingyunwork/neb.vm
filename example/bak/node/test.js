const fs = require('fs');
const path = require('path');
let kvStoreSource = fs.readFileSync(path.resolve(__dirname, '../contracts/kvStore.js'), 'utf-8');
let proxyKvStoreSource = fs.readFileSync(path.resolve(__dirname, '../contracts/proxyKvStore.js'), 'utf-8');

const NVM = require('../../src/nvm');

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


const nvm = new NVM(block, transaction);

nvm.deploy(kvStoreSource, JSON.stringify([]), {
    to: 'n1dAmstUGQ3YB4EVokmRdrvvVCNfJVU5WuS'
});

nvm.deploy(proxyKvStoreSource, JSON.stringify([]));

console.log(

    nvm.run(
        proxyKvStoreSource,
        'save',
        JSON.stringify(['n1dAmstUGQ3YB4EVokmRdrvvVCNfJVU5WuS','key', 'value'])
    )

);



// console.log(
//     nvm.run(source, 'testVerifyAddress', JSON.stringify(['']) )
// );


// let str = 'Nebulas is a next generation public blockchain, aiming for a continuously improving ecosystem.';
//
// console.log(
//     // nvm.run(source, 'testSha256', JSON.stringify([str]) )
//     // nvm.run(source, 'testSha3256', JSON.stringify([str]) )
//     // nvm.run(source, 'testRipemd160', JSON.stringify([str]) )
//     // nvm.run(source, 'testMd5', JSON.stringify([str]) )
//     // nvm.run(source, 'testBase64', JSON.stringify([str]) )
//
// );



/*
nvm.deploy(source, JSON.stringify([ '我的币','YXL', 2, 100]));


console.log(
    nvm.run(source, 'name', JSON.stringify([]) )
);

console.log(
    nvm.run(source, 'balanceOf', JSON.stringify([transaction.from]) )
);

nvm.run(source, 'transfer', JSON.stringify(['user0', 1000]) );

console.log(
    nvm.run(source, 'balanceOf', JSON.stringify([transaction.from]) ),
    nvm.run(source, 'balanceOf', JSON.stringify(['user0']) )
);
*/

