const Uint = require('../../src/node/uint');

var Uint64 = Uint.Uint64;
var a  = new Uint64(7);
var b = new Uint64("2");

console.log({
    'a+b': a.plus(b).toString(10),  // 9
    'a-b': a.minus(b).toString(10), // 5
    'a*b': a.mul(b).toString(10),   // 14
    'a/b': a.div(b).toString(10),   // 3
    'a%b': a.mod(b).toString(10),   // 1
    'a^b': a.pow(b).toString(10),   // 49
    'a>b': a.cmp(b) == 1,           // true
    'a==0': a.isZero(),             // false
    'a': a.toString(),              // 7
    'MaxUint64': Uint64.MaxValue.toString(16), // ffffffffffffffff
});
