function counts(teamA, teamB) {
    // Write your code here
    
    var counter = []
    for (var i = 0; i < teamB.length; i++) {
        var add = 0; var enough
        var count = 0
        for (var j = 0; j < teamA.length; j++) {
            enough + teamA[j]; 
            if (add <= teamB[i]) {
                add = add + teamA[j]
                count++
            } 
            else if(teamB[i] > enough)  {
                var shit = "Not enough goals"
            }
        }
        counter.push(count);  
        
    }

    return counter
}


console.log(counts([1,0,0,0,0,0,0,2,3,3,4,5,], [9, 200 ]))