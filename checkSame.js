// function checkSame(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false
//     }

//     //var result = {}
//     for (let i = 0; i < str2.length; i++) {
//         var currentIndex = str2.indexOf(str1[i] ** 2)
//         if (currentIndex < 0) {
//             return false
//         }

//         str2.splice(currentIndex, 1)
        
//     }
//     return true
// }



function checkSame(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    var str1Object = {}
    var str2Object = {}
    for (let val of str1) {
        str1Object[val] = (str1Object[val] || 0) + 1
    }

    for (let val of str2) {
        str2Object[val] = (str2Object[val] || 0) + 1
    }

    for (let key in str1Object) {
        if (!(key ** 2 in str2Object)) {
            return false
        }
        if(str2Object[key ** 2] !== str1Object[key]){
            return false
        }

        
    }

    return true
}


function checkAnagram(firstString, secondString) {
    if (firstString.length !== secondString.length) {
        return false
    }

     let firstStrObject = {}
     let secondStrObject = {}
    for (let val of firstString) {
        firstStrObject[val] = (firstStrObject[val] || 0 ) + 1
    }

    for (let val of secondString) {
        secondStrObject[val] = (secondStrObject[val] || 0 ) + 1
    }
    
    for (let key in firstStrObject) {
        if (!(key in secondStrObject)) {
            return false   
        }
        if (firstStrObject[key] !== secondStrObject[key]) {
            return false
        }
    }
    return true
}


// Another anagram code sample

function anagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false
    }

    var objectHolder = {}
    for (let i = 0; i < string1.length; i++) {
        var char = string1[i]
        objectHolder[char] ? objectHolder[char] + 1 : objectHolder[char] = 1
        
    }

    for (let i = 0; i < string2.length; i++) {
        var char = string2[i]

        if (!objectHolder[char]) {
            return false
        }
        else{
            objectHolder[char] - 1
        }
        
    }
    return true
}



//console.log(checkSame([1,2,5, 2], [4,25,4,1])); 

//console.log(checkAnagram('iza', 'zia'));

console.log(anagram('gram', 'magf'));