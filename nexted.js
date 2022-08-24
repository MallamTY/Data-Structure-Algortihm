// The code below has O(n^2) notation because it's a nexted load i.e.
// for O(n * n)  = O(n^2) which means that as n (number) grows, the run time grows at the rate of n^2

function pairsPrinter(number) {
    for (let i = 0; i <= number; i++) {
        for (let j = 0; j <= number; j++) {
            console.log(i, j)
            
        }
        
    }
}

pairsPrinter(3)