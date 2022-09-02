/*Linear search of an item in an array, list or string using the while loop. It is worthy to note that this can also be 
using for and forEach loop
*/

function linearSearch(arr, val) {
    let pointer = 0
    while (pointer < arr.length -1 ) {
        if (arr[pointer] !== val) {
            pointer ++
        }
        else {
            return pointer
        }
        
    }
    return - 1
}


function binarySearch(sortedAray, val) {
    var left = 0
    var right = sortedAray.length - 1

    while (left < right) {
        var middle = Math.round ((left + right)/2)

        if (sortedAray[middle] > val) {
            
            right = middle - 1 

        } else if (sortedAray[middle] < val) {
            
            left = middle + 1
        }

        else{
            return middle
        }
    }

    return `value not found in the Array supplied`
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 5))



