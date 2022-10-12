// //Implementing a stack using an Array

// //Implementing using Push and Pop

// var stack = [];
// stack.push(0);
// stack.push(1);
// // stack.push(2);
// // stack.push(3);
// console.log(stack);
// // console.log(stack.length)
// // console.log(stack.pop());
// // console.log(stack.pop());
// // console.log(stack.pop());
// // console.log(stack.pop());


//  //Stack implementation using unshift and shift on Array;
//  var Stack =[];
//  Stack.unshift('welcome');
// Stack.unshift('to');

//  console.log(Stack);
// console.log(Stack.shift());
// console.log(Stack.shift());
// console.log(Stack.shift());
// console.log(Stack.shift());


//IMPLEMENTING STACK USING SINGLY LINKED LIST

class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class StackLL{
    constructor(value){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(value){
        var newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            var temp = this.first;
            this.first = newNode
            newNode.next = temp;
            
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.first) return undefined;
        var delNode = this.first;
        this.first = delNode.next;
        delNode.next = null;
        this.length--;
        if(this.length === 0){
            this.last = null
        }
        return delNode.val;
    }
}

var Stack  = new StackLL();