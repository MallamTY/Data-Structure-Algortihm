function merger(arr1, arr2) {
    var result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }
        else{
            result.push(arr2[j]);
            j++;
        }
    }
    
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let midPoint = Math.floor(arr.length/2);
    console.log(midPoint);
    let left = mergeSort(arr.slice(0, midPoint));
    let right = mergeSort(arr.slice(midPoint));
   return merger(left, right)
}


// console.log(merger([3,5,6,7],[0,1,2]))
// console.log(mergeSort([10,4,2,9]))

const arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr.splice(0,4));