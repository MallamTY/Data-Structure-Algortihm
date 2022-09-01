// Working with factorial using the normal way and the recurssion way


function factorial(num) {
    var total = 1;
    for (let i = num; i > 1; i--) {
        total *= i
        
    }
    return total
}



// Factorial using the recurssion method

function factorialR(num) {
    if (num === 1) {
        return 1
    }
    return num * factorialR(num - 1)
}

console.log(factorial(5));

arr = [1,2,3,4,5,6,7]
console.log(arr.slice(2)); 
