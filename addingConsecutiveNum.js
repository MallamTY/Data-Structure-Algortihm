function maxSumSubArray(arr, num) {
    if(num > arr.length) {
        return null
    }
    max = -Infinity
    for (let i = 0; i < arr.length - num + 1; i++) {
        tempHolder = 0
        for (let j = 0; j < num; j++) {
            tempHolder += arr[i + j] 
            console.log(arr[i], arr[j]);
        }
        if(tempHolder > max) {
            max = tempHolder;

        }
        
        
    }
       return max
    
}


//Refactor form

function maxSumSubArrayR(arr, num) {
    max = 0
    temp = 0
    if (num > arr.length) {
        return null
    }

    for (let i = 0; i < num; i++) {
        max += arr[i]
        
    }
    temp = max;

    for (let i = num; i < arr.length; i++) {
        temp = temp - arr[i - num] + arr[i]
        max = Math.max(temp, max) 
    }
    return max 
    
}

console.log(maxSumSubArrayR([2,6,9,2,1,8,5,6,3], 3)); 