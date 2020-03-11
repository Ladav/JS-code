/**
 * BSF -binary search tree
 *          10
 *         /  \
 *        8    15
 *      /  \     \
 *     2    9    20
 * 
 *  we need 2 queue's one for the keeping record of all node's pending node and for visited node's.
 *  
 * iteration 1-queue[10(root)] , visited[]
 * pop first element of queue and put it into visited and check it has children, if it do have
 * put them into queue(pending)
 * iteration 2-
 * step 1->remove from queue and put it into visited->queue[] , visited[10]
 * step 2->if there is a left child->queue[8] , visited[10]
 * step 3->if there is a right child->queue[8,15] , visited[10]
 * iteration 3-
 * after iteration 3 we will have- queue[15,2,9] , visited[10,8]
 * iteration 4-
 * after iteration 3 we will have- queue[2,9,20] , visited[10,8,15]
 * and so on util the queue get's empty
 */

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
    BFS() {
        const queue = [];
        const visited = [];
        let curNode = this.root;
        
        if(!curNode) return[];
        queue.push(curNode);
    
        while(queue.length > 0) {   // loop until the queue is not empty
            curNode = queue.shift();
            // 1. put the current node into visited node and remove it from queue
            visited.push(curNode.val); // shift will the element from front
    
            // 2. check if visited node have children, if it does then push them into the queue
            if(curNode.left) queue.push(curNode.left);
            if(curNode.right) queue.push(curNode.right);        
        }
        return visited;
    };

    DFS_preOrder() {        // recursion based approach
        const visited = [];
        const curNode = this.root;

        function traverse(node) {
            visited.push(node.val);
            if(node.left) traverse(node.left);            
            if(node.right) traverse(node.right);       
        }
        traverse(curNode);
        return visited;
    };

    DFS_postOrder() {       // recursion based approach
        const visited = [];
        const curNode = this.root;

        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            visited.push(node.val);
        };
        traverse(curNode);
        return visited;
    };
    DFS_postOrder_2() {     // stack based approach
        const stack = [];
        const visited = [];
        let curNode = this.root;

        if(!curNode) return;

        while(stack.length > 0 || curNode) {
            if(curNode !== null) {
                stack.push(curNode);
                curNode = curNode.left;
            }
            else {
                let temp = stack[stack.length - 1].right;
                if(temp === null) {
                    temp = stack[stack.length - 1];
                    visited.push(temp.val);
                    stack.pop(); // removing visited node

                    while(stack.length > 0 && temp === stack[stack.length - 1].right) {
                        temp = stack.pop();
                        visited.push(temp.val);
                    } 
                }
                else {
                    curNode = temp;
                } 
            }
        };
        return visited;
    };
    DFS_inOrder() {     // recursion based approach
        const visited = [];
        const curNode = this.root;

        function traverse(node) {
            if(node.left) traverse(node.left);
            visited.push(node.val);
            if(node.right) traverse(node.right);
        };
        traverse(curNode);

        return visited;
    };
    DFS_inOrder_2() {   // stack based approach
        const stack = [];
        const visited = [];
        let curNode = this.root;

        if(!curNode) return;

        while(stack.length > 0 || curNode)
        {
            if(curNode !== null) {
                stack.push(curNode);
                curNode = curNode.left;
            }
            else {
                let temp = stack.pop();
                visited.push(temp.val);
                curNode = temp.right;
                console.log(visited);
            }
        }
        return visited;
    }
}

const binaryTree = new BST();
const nodes = [10,6,15,3,8,20];

for(let i = 0; i < nodes.length; i++) binaryTree.insert(nodes[i]);

console.log(binaryTree.DFS_inOrder_2());

/**
 *              10
 *             /  \
 *            6    15
 *          /  \     \
 *         3   8      20
 *  
 */