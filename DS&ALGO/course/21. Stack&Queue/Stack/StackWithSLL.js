class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if(this.top !== null) newNode.next = this.top;
        this.top = newNode;
        
        return ++this.length;
    }
    pop() {
        if(this.length === 0) return null;
        const removedNode = this.top;
        this.top = removedNode.next;
        this.length--;

        return removedNode.val;
    }
}

const s = new Stack();