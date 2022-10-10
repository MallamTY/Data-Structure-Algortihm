function getDigit(number, position) {
    return Math.floor(Math.abs(number)/Math.pow(10, position))%10;
}

function digitCount(number) {
    if (number === 0) return 1;
    return Math.floor(Math.log10(Math.abs(number)) + 1);
}

function maxLength(numbersArray) {
    let maxLen = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        maxLen = Math.max(maxLen, digitCount(numbersArray[i]))    
    }
    return maxLen;
}

function quickSort(numArray) {
    
    let maxDigit = maxLength(numArray);
    for (let position = 0; position < maxDigit; position++) {
        
        let digitHolder = Array.from({length: 10}, () => []);
        for (let i = 0; i < numArray.length; i++) {
            let value = getDigit(numArray[i], position)
            digitHolder[value].push(numArray[i])
            
        }
        numArray = [].concat(...digitHolder);
        
        
    }
    return numArray;
}


console.log(quickSort([23,67,53,221]))
