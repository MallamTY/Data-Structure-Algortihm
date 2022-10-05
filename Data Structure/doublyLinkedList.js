class Node{
    constructor(value){
        this.val = value;
        this.next = null;
        this.prev = null;
        
    }
}

class DoublyLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        var newNode = new Node(value);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.prev = this.tail
            this.tail.next = newNode;
            this.tail = newNode; 
        }
       
        this.length++;
        return this;
        
    }

    pop(){
        
        if(!this.head){
            return undefined;
        }
        var removeNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            
        }
        else{
            this.tail = removeNode.prev;
            this.tail.next = null;
            removeNode.prev = null;
        }

        this.length --;
        return removeNode;
    }

    //Remove a node from the begining of the Doubly Linked List
    shift(){
        if(!this.head) return undefined
        var currentHead = this.head;;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            currentHead.prev = null;
        }
        else{
            this.head = currentHead.next;
            this.head.prev = null;
            currentHead.next = null;
            
        }
        this.length--;
        return currentHead;
        
    }

    //Add a node to the begining of the Doubly Linked List
    unshift(value){
        if(value === undefined) return "An argument is required";
        var newNode = new Node(value);
        if(this.length === 0){ //Checking if the list is empty
            this.head = newNode;
            this.tail = newNode;
        }
        else{
          this.head.prev = newNode;
          newNode.next = this.head;
          this.head = newNode; 
        }
        this.length++;
        return this;    
    }

    //Getting a Node from a Doubly Linked List
    getNode(index){
        if(index < 0 || index >= this.length) return undefined;
        var half = this.length * 0.5
        if(index < half){
            var count = 0;
            var currentNode = this.head;
            while(count < index){
                currentNode = currentNode.next;
                count++
            }
        }
        else{
            var count = this.length - 1;
            var currentNode = this.tail;
            while(count > index){
                currentNode = currentNode.prev;
                count--;
            }
        }
        return currentNode;
    }

    setNode(value, index){
        if(index < 0 || index >= this.length) return undefined;
        var currentNode = this.getNode(index);
        if(!currentNode) return 'Error fetching node to replace'
        currentNode.val = value;
        return this;
        
    }

    insertNode(value, index){
        var newNode = new Node(value);
        if(index < 0 || index > this.length) return undefined;
        if(index === 0){
           this.unshift(value);
        }
        else if(index === this.length){
            this.push(value);
        }
        else{
            
            var prevNode = this.getNode(index - 1);
            newNode.prev = prevNode;
            newNode.next = prevNode.next
            prevNode.next = newNode;
            this.length++;
            
        }
        return this;
    }

    removeNode(index){
        if(index < 0 || index === this.length) return undefined;
        if(index === 0){
            var oldHead = this.head;
            var newHead = oldHead.next;
            newHead.prev = null
            this.head = newHead;
            oldHead.next = null 
        }
        else if(index === this.length - 1){
            var removeNode = this.tail;
            var newTail = removeNode.prev;
            removeNode.prev = null;
            this.tail = newTail;
            newTail.next = null;
        }
        else{
                var prevNode = this.getNode(index - 1);
                var removeNode = prevNode.next;
                var nextRemNode = removeNode.next;
                prevNode.next = nextRemNode;
                nextRemNode.prev = prevNode;
                removeNode.next = null;
                removeNode.prev = null;
                
        }
       
        this.length--;
        return this;

    }

    print(){
        var arr = [];
        var current = this.head;
        var count = 0;
        while(count !== this.length){
            arr.push(current.val);
            current = current.next;
            count++
        }
        console.log(arr);
    }
}



var dLL = new DoublyLL();
dLL.push(1);
dLL.push(2);
dLL.push(3);
dLL.push(4);
dLL.push(5);
dLL.push(6);
dLL.push(7);
dLL.push(8);
dLL.push(9);


//dLL.shift()