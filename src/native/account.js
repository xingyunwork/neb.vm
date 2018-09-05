var Buffer = require('safe-buffer').Buffer;
var Base58 = require('bs58');
var cryptoUtils = require('./utils/crypto-utils.js');
var utils = require('./utils/utils.js');


var AddressLength = 26;
var AddressPrefix = 25;
var NormalType = 87;
var ContractType = 88;

var KeyVersion3 = 3;
var KeyCurrentVersion = 4;


/**
 * Key Object.
 * @typedef {Object} Key
 * @property {Number} version
 * @property {Buffer} id
 * @property {HexString} address
 * @property {Object} crypto
 * @global
 */

/**
 * Account constructor.
 * Class encapsulate main operation with account entity.
 * @constructor
 *
 * @param {Hash} priv Account private key.
 * @param {String} path
 *
 * @example var account = new Account(new Buffer("ac3773e06ae74c0fa566b0e421d4e391333f31aef90b383f0c0e83e4873609d6", "hex") );
 *
 */
var Account = function (priv, path) {
    priv = priv || cryptoUtils.crypto.randomBytes(32);
    this.setPrivateKey(priv);
    this.path = path;
};

/**
 * Address validation method.
 *
 * @static
 * @param {String/Hash} addr - Account address.
 * @param {Number} type - NormalType / ContractType
 *
 * @return {Boolean} Is address has correct format.
 *
 * @example
 * if ( Account.isValidAddress("n1QZMXSZtW7BUerroSms4axNfyBGyFGkrh5") ) {
 *     // some code
 * };
 */
Account.isValidAddress = function (addr, type) {
    /*jshint maxcomplexity:10 */

    if (utils.isString(addr)) {
        try {
            addr = Base58.decode(addr);
        } catch (e) {
            console.log("invalid address.");
            // if address can't be base58 decode, return false.
            return false;
        }
    } else if (!Buffer.isBuffer(addr)) {
        return false;
    }
    // address not equal to 26
    if (addr.length !== AddressLength) {
        return false;
    }

    // check if address start with AddressPrefix
    var buff = Buffer.from(addr);
    if (buff.readUIntBE(0, 1) !== AddressPrefix) {
        return false;
    }

    // check if address type is NormalType or ContractType
    var t = buff.readUIntBE(1, 1);
    if (utils.isNumber(type) && (type === NormalType || type === ContractType)) {
        if (t !== type) {
            return false;
        }
    } else if (t !== NormalType && t !== ContractType) {
        return false;
    }
    var content = addr.slice(0, 22);
    var checksum = addr.slice(-4);
    return Buffer.compare(cryptoUtils.sha3(content).slice(0, 4), checksum) === 0;
};

module.exports = Account;
