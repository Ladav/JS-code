class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);

        if (this.root === null) {
            this.root = newNode;
            return this;
        } 


        let curNode = this.root;
        while (true) {
            if (newNode.val === curNode.val) return undefined; // node with same value exists already
            if (curNode.val > newNode.val) {
                if(curNode.left === null) {
                    curNode.left = newNode;
                    return this;
                }
                curNode = curNode.left;
            }
            else {
                if(curNode.right === null) {
                    curNode.right = newNode;
                    return this;
                }
                curNode = curNode.right;
            }
        }
    }
    search(val) {
        if(!this.root) return false;
        
        let curNode = this.root;
        while(true) {
            if(!curNode) return undefined;
            if(curNode.val === val) return curNode;
            if(curNode.val > val) {
                curNode = curNode.left;
            }
            else {
                curNode = curNode.right;
            }
        }
    }
}

const binaryTree = new BST();
console.log(binaryTree.insert(1));
console.log(binaryTree.insert(2));
console.log(binaryTree.search(0));