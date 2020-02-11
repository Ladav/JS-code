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

        if (!this.head) {
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
        if (!this.head) return undefined;   // if there are any nodes in the list

        const poppedNode = this.tail;
        if (this.head === this.tail) this.head = this.tail = null;   // if there is only one node in the list
        else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if (!this.head) return undefined;

        const oldHead = this.head;
        if (this.length === 1) this.head = this.tail = null;
        else {
            this.head = oldHead.next;
            oldHead.next = null;
            this.head.prev = null;
        }
        this.length--;
        return oldHead;
    }
    unShift(val) {
        const newNode = new Node(val);
        if (!this.head) this.head = this.tail = newNode;
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode
        }
        this.length++;
        return newNode;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let curNode, count;
        if (index <= this.length / 2) {
            count = 0;
            curNode = this.head;
            while (count !== index) {
                curNode = curNode.next;
                count++;
            }
        } else {
            count = this.length - 1;
            curNode = this.tail;
            while (count !== index) {
                curNode = curNode.prev;
                count--;
            }
        }
        return curNode;
    }
    set(index, val) {
        const foundNode = this.get(index);
        if (foundNode !== null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unShift(val);
        if (index === this.length) return !!this.push(val);

        const newNode = new Node(val);
        const nextNode = this.get(index);
        const prevNode = newNode.prev;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;

        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.shift(val);
        if (index === this.length - 1) return !!this.pop(val);

        const removedNode = this.get(index);
        const nextNode = removedNode.next;
        const prevNode = removedNode.prev;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        // removed.next.prev = removed.prev;    
        // removed.prev.next = removed.next;
        removedNode.next = removedNode.prev = null;

        this.length--;
        return removedNode;
    }
};

const DLL = new Dlist();

console.log(DLL.push(1));
// console.log(DLL.push(2));
// console.log(DLL.push(4));

console.log(DLL.insert(1, 2));
// console.log(DLL.pop());
// console.log(DLL.pop());