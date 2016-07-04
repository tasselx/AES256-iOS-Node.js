# AES256-iOS-Node.js
AES 256 for iOS &amp; Node.js

##Usage

###iOS
    
```
 #import "NSString+AESCrypt.h"

 NSString *key = @"tassel";
 NSString *toCrypt = @"62e1b6c9e8a5304475ce61847920b797";
 
 NSLog(@"AES256 %@",[toCrypt AES256EncryptWithKey:key]);
 NSLog(@"Plaintext %@",[[toCrypt AES256EncryptWithKey:key] AES256DecryptWithKey:key]);

```
###Node.js

```
var aes256 = require('./aes256.js')
var key     = "tassel";
var toCrypt = "62e1b6c9e8a5304475ce61847920b797";

console.log('AES256 '+aes256.encrypt(key,toCrypt));
console.log('Plaintext '+aes256.decrypt(key,aes256.encrypt(key,toCrypt)));

```