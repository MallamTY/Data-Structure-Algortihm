//Naive Solution

function sumZero(value) {
    for (let i = 0; i < value.length; i++) {
        for (let j = 0; j < value.length; j++) {
            if(value[i] + value[j]  === 0){
                return [value[i], value[j]]
            }
        }
        
    }
}



//Refactored way

function sumZeroR(values) {
    var left = 0;
    var right = values.length - 1
    while (left < right) {
        let sum = values[left] + values[right]
        if (sum === 0) {
            return [values[left], values[right]]
        }
        else if (sum > 0) {
            right --
        }
        else{
            left ++
        }
        
    }
}

console.log(sumZeroR([-4,-3,-2,-1,0,1,2,3,4]))