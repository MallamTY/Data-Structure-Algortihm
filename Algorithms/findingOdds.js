//Using Helper Meethod Recussion to find odd numbers in an array

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


// Finding odd numbers using Pure Recussion method

function oddFinderR(arr) {
    let resultArray = [];

    if (arr.length === 0) {
        return resultArray;
    }

    if (arr[0] % 2 !== 0) {
        resultArray.push(arr[0])
    }

    resultArray = resultArray.concat(oddFinder(arr.splice(1)))
    return resultArray;
}


console.log(oddFinder([1,2,3,4,5,6,7,8,9]));