

 /*Implementing a Queue with an array can be done using Push() add the elements and shift())
 to remove them 
 */

 // const queue = [];
 // queue.push('Welcome');
 // queue.push('backing');
 // queue.push('because');;
 // queue.push('learning never end');

 // /*To make an array function like a queue, one have to call the shift() method on the 
 // array and not pop() since the pop method remove element from the end (LIFO) which is a feature of a stack

 // queue.shift() // Returns 'Welcome' since Welcome was the first element in the array The shift() method of an array remove an element from the begining while unshift() add element to the 
 // begining
 // */

 // //console.log(queue.shift())

 //                                     //OR

 // /* Implementation of queue using an array can be done using Unshift() method to add the elements
 // and Pop() to remove them
 // */

 // const Queue1 = [];
 // Queue1.unshift('FIRST');
 // Queue1.unshift('SECOND');
 // Queue1.unshift('THIRD');

//console.log(Queue.pop());




/* Implementation of Queue using the Singliy Linked List for proper effective i.e reduced time complexity
involves adding node/element to the bad/tail(ENQUE) and removing elements/nodes from the front/head
(DEQUE);
*/
class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class QueueSLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enque(value){
        var newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    deque(){
        // if(this.length === 0) {
        //     this.tail = null
        //     return 'Queue is empty !!!'
        // }
        var oldHead = this.head;
        var newHead = oldHead.next;
        this.head = newHead;
        oldHead.next = null;
        this.length--;
        return oldHead;
    }
}

var queueSLL = new QueueSLL();