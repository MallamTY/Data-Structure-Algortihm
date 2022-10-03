// function charCount(strr) {
//     //declare object
//     var result = {};

//     //iterate over strr
//     for (let i = 0 ; i < strr.length ; i++) {
//         var char = strr[i].toLowerCase();
//     //check if char isn't in declared object, add it to object and set value
//         if (result[char] > 0) {
//             result[char] += 1
//         }
//         //check if char in is in declared object, increase its count
//         else {
//             result[char] = 1
//         }
        
//     }
//     //return obecject
//     return result
// }



// function stringCounter(strr) {
//     var resultObject = {}
//     for (let i = 0; i < strr.length; i++) {
//         var char = strr[i].toLowerCase()
//         if (/[a-z0-9]/.test(char)) {
//             if (resultObject[char] > 0) {
//                 resultObject[char] += 1
//             }
//             else{
//                 resultObject[char] = 1;
//             }
//         }

//     }
//     return resultObject
// }


// function stringCounter(strr){
//     var resultObject = {}
//     for(var char of strr){
//         char = char.toLowerCase()
//         if (/[a-z0-9]/.test(char)) {
//            if (resultObject[char] > 0) {
//                resultObject[char] += 1;
//            } else {
//                resultObject[char] = 1
//            } 
//         }
//     }

//     return resultObject
// }

// function stringCounter(strr){
//     var resultObject = {}
//     for(var char of strr){
//         char = char.toLowerCase()
//         if (/[a-z0-9]/.test(char)) {
//           resultObject[char] = ++ resultObject[char] || 1;
//     }

//     }
//     return resultObject
// }


function isAlphanumeric(char) {
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123))
     {
        return false;
    } else {
        return true;
    }
}

 function stringCounter(strr){
     var resultObject = {}
     for(var char of strr){
         if (isAlphanumeric(char)) {
            char = char.toLowerCase()
           resultObject[char] = ++ resultObject[char] || 1;
     }

     }
     return resultObject
 }


console.log(stringCounter("Hello World!!!!"));


