
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var currentValue = arr[i]
        console.log('Current: ',currentValue);
        for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            console.log(`i = ${i}, j= ${j}`);
            console.log(`\narr[j] = ${arr[j]},   arr[j+1] = ${arr[j+1]}   arr[j-1] = ${arr[j-1]}   currentValue = ${currentValue}\n`);
            arr[j+1] = arr[j]
            
            console.log(arr);
     
        }
        console.log(j+1)
        arr[j+1] = currentValue
        console.log(`return = ${[arr]}`);
        console.log("\n**************************");
    }

    return arr
    
}


console.log(insertionSort([5,2,0,1,9,10]))