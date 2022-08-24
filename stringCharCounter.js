function charCount(strr) {
    //declare object
    var result = {};

    //iterate over strr
    for (let i = 0 ; i < strr.length ; i++) {
        var char = strr[i]   
    //check if char isn't in declared object, add it to object and set value
        if (result[char] > 0) {
            result[char] += 1
        }
        //check if char in is in declared object, increase its count
        else {
            result[char] = 1
        }
        
    }
    //return obecject
    return result
}


console.log(charCount("Hello World"));