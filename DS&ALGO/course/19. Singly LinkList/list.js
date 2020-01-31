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
}

let sll = new SinglyLL();
sll.push("hi");
sll.push('there');
sll.push('how');
sll.push('are');
sll.push('you');

// sll.pop();

console.log(sll);

// sll.traverse();

// const n1 = new Node("hi");
// n1.next = new Node('there');
// n1.next.next = new Node('how');

// console.log(n1);