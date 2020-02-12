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


        let tempNode = this.root;
        while (true) {
            if (tempNode.val > newNode.val) {
                if(tempNode.left === null) {
                    tempNode.left = newNode;
                    return this;
                }
                tempNode = tempNode.left;
            }
            else {
                if(tempNode.right === null) {
                    tempNode.right = newNode;
                    return this;
                }
                tempNode = tempNode.right;
            }
        }
    }
}

const binaryTree = new BST();
console.log(binaryTree.insert(1));
console.log(binaryTree.insert(2));
console.log(binaryTree.insert(0));