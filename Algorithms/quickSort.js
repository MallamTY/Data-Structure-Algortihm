function pivotIndex(arr, start = 0, end = arr.length - 1) {
    var pivot = arr[start];
    var swapIndex = start;

    function swap(swapArray, i, j) {
        var temp = swapArray[i];
        swapArray[i] = swapArray[j];
        swapArray[j] = temp;
        
    }

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;;
            swap(arr, swapIndex, i);
            console.log(arr, i, swapIndex);
        }
        //console.log(arr)
    }
    //console.log(start, swapIndex);
    swap(arr, swapIndex, start);
    return swapIndex;
    
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    let pivIndex = pivotIndex(arr, left, right);
    if (left < right) {
        pivotIndex(arr, left = 0, right = pivIndex - 1);
        pivotIndex(arr, left = pivIndex + 1, right = arr.length - 1) 
    }

    return arr;
}


console.log(quickSort([4,2,8,1,5,7,6,3]))