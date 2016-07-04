var aes256 = require('./aes256.js')
var key     = "tassel";
var toCrypt = "62e1b6c9e8a5304475ce61847920b797";

console.log('AES256 '+aes256.encrypt(key,toCrypt));
console.log('Plaintext '+aes256.decrypt(key,aes256.encrypt(key,toCrypt)));