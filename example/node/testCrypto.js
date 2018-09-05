
/*
*
* https://github.com/pepperdb/pepperdb-core/blob/master/core/crypto.go
*
* */


const Crypto = require('../../src/node/crypto.js');

var str='Nebulas is a next generation public blockchain, aiming for a continuously improving ecosystem.'

var alg = 1
var hash = '564733f9f3e139b925cfb1e7e50ba8581e9107b13e4213f2e4708d9c284be75b'.substring(0,32)
var sign = 'd80e282d165f8c05d8581133df7af3c7c41d51ec7cd8470c18b84a31b9af6a9d1da876ab28a88b0226707744679d4e180691aca6bdef5827622396751a0670c101'.substring(1,65)


// console.log( Crypto.sha3256(str) );
console.log( Crypto.recoverAddress(alg, hash, sign) );

