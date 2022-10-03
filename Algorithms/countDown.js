//A function that count down to zero from the value supplied by the user

function countDown(num) {
    if (num <= 0) {
         return console.log(`Count down completed ..........`);
    }
    console.log(num);
    num -= 1
    countDown(num)
}


countDown(5)


// Function to sum range using recursion

function sumRange(num) {
    if (num === 1) {
        return 1
    }
    
    return num + (sumRange(num - 1))
}

console.log((sumRange(4)));
