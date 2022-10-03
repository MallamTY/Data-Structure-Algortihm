function same(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    for (let i = 0; i < str1.length; i++) {
        let currentIndex = str2.indexOf(str1[i] ** 2);
        if (currentIndex < 0) {
            return false
        }
        str2.splice(currentIndex, 1)
        
    }
    return true
}


console.log(same([1,2,3], [2,3,4,5,6])); 