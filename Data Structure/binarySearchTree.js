class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        var newNode = new Node(value)
        if(!this.root){
            this.root = newNode;
            return this;
        }
        else{
            var currentNode = this.root;
            while(currentNode){
                if(value === currentNode.value) return 'Value already existing in the tree'
                if(value > currentNode.value){
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                     else{
                         currentNode = currentNode.right;
                     }
                }
                else{
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    else{
                        currentNode = currentNode.left;
                    }
                }
            }
        }
    }

    finder(value){

        var found = false;
        var currentNode = this.root;
        if(!this.root) return 'Value not found !!!';
        while(currentNode){
            if(currentNode.value < value){
                currentNode = currentNode.right
            }
            else if(currentNode.value > value){
                currentNode = currentNode.left
            }
            else{
                return currentNode;
            }
        }
        if(!currentNode) return 'Value not found !!!'
        
    }

    BreadthFirstTraversal(){
        var node = this.root, 
            holder = [],
            outPut = [];
        holder.push(node);
        while(holder.length){
            node = holder.shift();
            outPut.push(node.value);

            if(node.left) holder.push(node.left);
            if(node.right) holder.push(node.right);
        }
        return outPut;
    }

    DFTPreOrder(){
        var currentNode = this.root,
            outPut = [];
        function traverse(node) {
            outPut.push(node.value);

            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(currentNode);
        return outPut;
    }

    DFTPostOrder(){
        var currentNode = this.root,
            outPut = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            outPut.push(node.value)
        }
        traverse(currentNode);
        return outPut;
    }

    DFTInOrder(){
        var currentNode = this.root,
            outPut = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            outPut.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(currentNode);
        return outPut;
    }
}




var bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(8);
bst.insert(3);
bst.insert(15);
bst.insert(23);
bst.insert(12)
bst.DFTPreOrder();