
class Node{
    constructor(val){
        
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(value){
        var newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
           
        }
        else{
            var temp = this.head;
            this.head = newNode;
            this.head.next = temp;
            
        }

        this.length ++;
        return this;
    }

    pop(){
        if(!this.head){
            return "The list is empty !!!";
        }
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length --;
        if(this.length === 0){
            this.head = null;
            this.tail = null
        }
        return current.val;
    }

    //Removing new element/node from the beginning of a LinkedList
    shift(){
        if(!this.head){
            return "List is empty !!!";
        }
        var oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return oldHead.val;
    }
}


var list = new SinglyLinkedList();
list.push('Welcome');
list.push('to');
list.push('JavaScript');
list.push('Class')

console.log(list.shift())
console.log(list.shift())
console.log(`The length of the list is: ${list.length}`);