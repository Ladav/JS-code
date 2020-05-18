class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    // traverse() {
    //     let curNode = this.head;
    //     while(curNode) {
    //         console.log(curNode.val);
    //         curNode = curNode.next;
    //     }
    // }

    pop() {
        if(!this.head) return undefined;
        let curNode = this.head;
        let prev = curNode;

        while(curNode.next) {
            prev = curNode;
            curNode = curNode.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) this.head = this.tail = null; // when there are no node left in the list
        
        return curNode;     // use delete to free the occupied storage
    }

    shift() {
        if(!this.head) return undefined;

        let curNode = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0) this.tail = null; // when there are no node left in the list

        return curNode;
    }

    unShift(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) {
            return null;
        }

        let curNode = this.head;
        let counter = 0;

        while(counter < index) {
            curNode = curNode.next;
            counter++;
        }

        return curNode;
    }

    set(index, val) {
        const node = this.get(index);
        if(node) {
            node.val = val;
            return true;
        }

        return false;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false; 
        // when inserting at index 0
        if(index === 0) return !!this.unShift(val);
        // when inserting at the end of the list
        if(index === this.length) return !!this.push(val);
        // when inserting somewhere between the list
        const newNode = new Node(val);
        const prevNode = this.get(index - 1);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;

        return true;
    }

    remove(index) {
        if(index < 0 || index > this.length - 1) return undefined; 
        // when removing from index 0
        if(index === 0) return this.shift(); 
        // when removing at the end of the list
        if(index === this.length - 1) return this.pop(); 
        // when removing from between
        const prevNode = this.get(index - 1);
        const removedNode = prevNode.next;
        prevNode.next = removedNode.next;
        this.length--;
        
        return removedNode;
    }

    reverse() {
        let curNode = this.head;
        this.head = this.tail; 
        this.tail = curNode;
        
        let nextNode, prevNode = null;

        while(curNode) {
            nextNode = curNode.next;
            curNode.next = prevNode;
            prevNode = curNode;
            curNode = nextNode;
        }

        return this;
    }
}

let SLL = new SinglyLL();
SLL.push("hi");
SLL.push('there');
SLL.push('how');
SLL.push('are');
SLL.push('you');

// SLL.pop();

console.log(SLL);
console.log(SLL.reverse())
console.log(SLL);

// SLL.traverse();

// const n1 = new Node("hi");
// n1.next = new Node('there');
// n1.next.next = new Node('how');

// console.log(n1);