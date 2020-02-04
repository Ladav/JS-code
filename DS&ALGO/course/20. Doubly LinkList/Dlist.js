class Node {
    constructor(val) {
        this.prev = null;
        this.next = null;
        this.val = val;
    }
};

class Dlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        
        if(!this.head) {
            this.head = this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if(!this.head)  return undefined;   // if there are any nodes in the list
        
        const poppedNode = this.tail;
        if(this.head === this.tail) this.head = this.tail = null;   // if there is only one node in the list
        else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
};

const DLL = new Dlist();

console.log(DLL.push(1));
console.log(DLL.push(2));
console.log(DLL.push(4));

console.log(DLL.pop());
console.log(DLL.pop());
console.log(DLL.pop());