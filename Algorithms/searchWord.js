/**
 * This program will be searching for a shorter string in a longer string and see if the shorter
 * string is contained in the longer string using the Naive and best ways
 */

function stringSearcher(longString, shortString) {
    count = 0;
    for (let i = 0; i < longString.length; i++) {
        for (let j = 0; j < shortString.length; j++) {
            console.log(longString[i+ j], shortString[j]);
            if (longString[i + j] !== shortString[j]) {
                console.log(`BREAK`);
                break;
                
            }
            
            if (j === shortString.length - 1) {
                count ++
                
            }  
        }  
    }
    return count
}


console.log(stringSearcher("loadfflohh ghflolifjf", "lo"))