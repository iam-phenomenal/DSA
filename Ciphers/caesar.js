function caeserEncode(word, key){
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let cipher = ""
    for(var i=0; i<word.length; i++){
        var textIndex = alphabets.indexOf(word[i])
        if(textIndex != -1){
            var cipherIndex = textIndex + key
            if(cipherIndex > 25){
                cipherIndex = 26 -cipherIndex
            }
            cipher += alphabets[cipherIndex]
        }else{
            cipher += word[i]
        }
    }
    return cipher
}

function caeserDecode(cipher, key){
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let message = ""
    for(var i = 0; i < cipher.length; i++){
        var cipherIndex = alphabets.indexOf(cipher[i])
        if(cipherIndex != -1){
            var textIndex = cipherIndex - key
            if(textIndex < 0){
                textIndex = 26 + textIndex
            }
            message += alphabets[textIndex]
        }else{
            message += cipher[i]
        }
    }
    return message
}

var test = "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."
console.log(caeserDecode(test, 13))

/**
 * Psuedocode
 * Start
 * INPUT cipher key
 * 
 */

/**
 * ILLUSTRATION
 * [A:0| B:1| C:2| D:3| E:4| F:5| G:6| F:7| H:8| 
 * I:9| J:10| K:11| L:12| M:13| N:14| O:15| P:16| Q:17| 
 * R:18| S:19| T:20| U:21| V:22| X:23| Y:24| Z:25]
 * Given a key of 8 and a message of hello
 * HELLO
 * Formula:
 * CipherIndex = Letter[Index] + key
 * If Cipher index in greater than 25:
 * CipherIndex = 26 - prevCipherIndex
 * 
 * HELLO = [8+8| 4+8| 12+8| 12+8| 15+8] = [16|12|20|20|23]
 * HELLO = PLTTX
 * 
 * 0 - 1 
 * DECODE
 * TEXT = CIPHER - KEY
 * P
 */