function selectionSort(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        var minValIndex = i
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minValIndex]) {
                    minValIndex = j;   
                }     
            }
            if (i !== minValIndex) {
            console.log(i,minValIndex);
            var temp = arr[i];
            arr[i] = arr[minValIndex];
            arr[minValIndex] = temp;
            }
            
    }
    return arr 
    
}


console.log(selectionSort([0,2,34,22,10,19,17]))