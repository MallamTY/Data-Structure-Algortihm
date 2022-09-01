//Using Recursion Helper Method to find odd numbers in an array

function oddFinder(arr) {
    let result = [];

    function innerFunction(innerInput) {
        if (innerInput.length === 0) {
            return
        }

        if (innerInput[0] % 2 !== 0) {
            result.push(innerInput[0])
        }

        innerFunction(innerInput.splice(1))
    }
    innerFunction(arr)
    return result
}


console.log(oddFinder([1,2,3,4,5,6,7,8,9]));