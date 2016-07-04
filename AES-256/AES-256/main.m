//
//  main.m
//  AES-256
//
//  Created by Tassel on 16/7/4.
//  Copyright © 2016年 Tassel. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "NSString+AESCrypt.h"

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // insert code here...
        NSString *key = @"tassel";
        NSString *toCrypt = @"62e1b6c9e8a5304475ce61847920b797";
       
        NSLog(@"AES256 %@",[toCrypt AES256EncryptWithKey:key]);
        NSLog(@"Plaintext %@",[[toCrypt AES256EncryptWithKey:key] AES256DecryptWithKey:key]);


        
    }
    return 0;
}
