const cryptoUtils = require('./utils/crypto-utils.js');

module.exports = {
    sha256: function (data) {
    },
    sha3256: function(data) {
        return cryptoUtils.sha3(data).toString('hex');
    },
    ripemd160: function(data) {
        return cryptoUtils.ripemd160(data).toString('hex');
    },
    md5: function(data) {
    },
    base64: function(data) {
    },
    recoverAddress: function(alg, hash, sign) {
        // message, signature, recovery, compressed
        return cryptoUtils.recover(hash, sign, 0);
    }
};