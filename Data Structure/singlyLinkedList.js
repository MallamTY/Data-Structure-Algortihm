
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
            this.tail.next = newNode;
            this.tail = newNode;
            
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

    //Remove new element/node from the beginning of a LinkedList
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

    //Adding new element to the beginning of a SinglyLinkedList
    unshift(value){
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

   
    getNode(index){
        var currentNode = this.head;
        var count = 0;
        if(index < 0 || index >= this.length){
            return undefined;
        }
        while(count < this.length){
            if(count === index){
                return currentNode;
            }
            else{
                currentNode = currentNode.next;
                count++;
            }
            
        }
        
    }

    setValue(value, index){
        var replacingNode = this.getElement(index);
        if(!replacingNode) return true;
        
        replacingNode.val = value;
        return true;
        
    }

    insertNode(value, index){
        var newNode = new Node(value);
        if(index < 0 || index > this.length) return undefined;
        else if(index === this.length){
            this.push(value);
            return true;
        }
        else if(index === 0){
            this.unshift(value);
            return true;
        }
        else{
            var prevNode = this.getNode(index - 1);
            newNode.next = prevNode.next;
            var insertNode = prevNode.next = newNode;
            this.length++;
            return insertNode;
        }
    }

    removeNode(index){
        if(index < 0 || index >= this.length) return undefined;
        else if(index === this.length - 1){
            var rem = this.pop()
            return rem;
        }
        else if(index === 0){
            var rem = this.shift();
            return rem;
        }
        else{
            var prevNode = this.getNode(index - 1);
            var rem = prevNode.next;
            prevNode.next = rem.next;
            this.length--;
            return rem;
        }
    }

    reverSinglyLL(){
        var node = this.head;
        this.head = this.tail;
        //this.tail = node;
        var next = null;
        var prev = null;
        for (let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

     print(){
         var arr = [];
         var current = this.head;
         while(current){
         arr.push(current.val);
             current = current.next;
         }     console.log(arr);
     }
    
}


var list = new SinglyLinkedList();
list.push(0)
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)

//var reverse = list.reverSinglyLL();

