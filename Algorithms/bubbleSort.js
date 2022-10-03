//Naive approach

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr);
            if (arr[j] > arr[j+1]) {
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }

    return arr;

}


//Better way
function bubbleSortR(arr) {
    for (let i = arr.length; i > 0 ; i--) {
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], "   ", arr[j+1], "   ", i);
            if (arr[j] > arr[j+1]) {
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }  
    }

    return arr;

}


//Implementing Bubble sort in a more optimized way

function bubbleSortR(arr) {
    var swap
    for (let i = arr.length; i > 0 ; i--) {
        swap = false
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], "   ", arr[j+1], "   ", i);
            if (arr[j] > arr[j+1]) {
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
                swap = true
            }
        } 
        if (!swap) break;  
         
    }
   

    return arr;

}

console.log(bubbleSortR([34,0,38,39]))
