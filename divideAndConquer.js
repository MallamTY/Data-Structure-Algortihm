/**
 * write a function which accepts an array and a number and return the index of the number supplied in the array
 */

//Naive method

function searcher(array, val) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === val) {
            return i 
        }
        
    } 
    return -1
    
}


//Refactored way

function searcherR(array, val) {
    Lower = 0
    upper = array.length - 1
    while (lower <= upper) {
        let middle = Math.round((lower + upper)/2)
        currentElement = array[middle]

        if(currentElement > val){
            upper = middle - 1
        }
        else if (currentElement < val){
            lower = middle + 1
        }
        else{
            return middle
        }
       
    }
    return -1
}

console.log(searcher([1,2,3,4,5,7,8], 3));
console.log(Math.round(0.5));