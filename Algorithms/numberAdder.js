function firstAdder(number) {
   let total = 0   
   for (let i = 0; i <= number; i++) {
       total =+ i
       
   }
   return total;
}


var t1 = performance.now()
firstAdder(1000000000)
var t2 = performance.now()

console.log(`the time it took to run this code is: ${(t2 - t1)/1000} seconds`);


function secondAdder(number) {
    return number * (number + 1) /2
    
}


var t1 = performance.now()
secondAdder(1000000000)
var t2 = performance.now()

console.log(`the time it took to run this code is: ${(t2 - t1)/1000} seconds`);

