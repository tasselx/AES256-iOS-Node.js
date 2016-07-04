/**
 * Created by Tassel on 16/7/4.
 */

var aes256 ={},crypto = require('crypto');

aes256.encrypt = function (key, data) {

    keyBuf = new Buffer(Array(32));
// Copy the key into this buffer
    keyBuf.write(key, 'utf8');
// Create the 16-byte zero-filled IV buffer
    ivBuf = new Buffer(Array(16));
    var cipher = crypto.createCipheriv('aes256', keyBuf, ivBuf);
    output = cipher.update(data, 'utf-8', 'base64') + cipher.final('base64');
    return output;
};

aes256.decrypt = function (key, data) {

    keyBuf = new Buffer(Array(32));
// Copy the key into this buffer
    keyBuf.write(key, 'utf8');

// Create the 16-byte zero-filled IV buffer
    ivBuf = new Buffer(Array(16));
    var deCipher = crypto.createDecipheriv('aes256', keyBuf, ivBuf);
    decrypted = deCipher.update(data,'base64','utf-8') + deCipher.final('utf-8');
    return decrypted;
};
module.exports = aes256;