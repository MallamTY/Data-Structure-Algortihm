function uniqueValCount(arr) {
     if (arr.length === 0){
         return 0
      }
    var i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i ++
            arr[i] = arr[j]
        }
        
    }
    return i + 1
}


console.log(uniqueValCount([1,2,3])); 