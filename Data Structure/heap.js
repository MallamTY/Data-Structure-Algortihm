class HashTable{
    constructor(size=31){
        this.keysHolder = new Array(size);
    }

    hash(key){
        let total = 0,
            primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96;
            total = (total * primeNumber + Math.abs(value)) % this.keysHolder.length;
        }
        return total;
    }

    //In this set(), collison is resolved using the sperate chaining method
    set(key,value){
        let index = this.hash(key);
        if(!this.keysHolder[index]){
            this.keysHolder[index] = [];
        }
        if(!this.keysHolder[index].includes(key)){
            this.keysHolder[index].push([key, value]);  
        }
    }

    get(key){
        if(!key){
            return "get(params) requires key parameter !!!"
        }
        let index = this.hash(key);
        if(this.keysHolder[index]){
           for (let i = 0; i < this.keysHolder[index].length; i++) {
               if(this.keysHolder[index][i][0] === key){
                   return this.keysHolder[index][i][1];
               }
           } 
        }
        return undefined
    }

    getValues(){
        let valuesHolder = [];
        for (let i = 0; i < this.keysHolder.length; i++) {
            if(this.keysHolder[i]){
                 for (let j = 0; j < this.keysHolder[i].length; j++) {
                     if(!valuesHolder.includes(this.keysHolder[i][j][1])){
                          valuesHolder.push(this.keysHolder[i][j][1]);
                     }
                 }
            }
        }
        return valuesHolder;
    }

    getKeys(){
        let keyHolder = [];
        for (let i = 0; i < this.keysHolder.length; i++) {
            if(this.keysHolder[i]){
                 for (let j = 0; j < this.keysHolder[i].length; j++) {
                     keyHolder.push(this.keysHolder[i][j][0]);
                 }
            }
        }
        return keyHolder;
    }
}

var hashT = new HashTable(4)


