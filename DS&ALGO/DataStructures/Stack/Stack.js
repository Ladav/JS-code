class Stack {
    constructor(size) {
        this.storage = {};
        this.size = size;
        this.pos = 0;
    }

    push(element) {
        if(this.pos < this.size) {
            this.storage[this.pos] = element;
            this.pos++;
        }
        else {
            console.log('overflow');
        }
    }

    pop() {
        let temp = this.storage[this.pos - 1];
        this.pos--;

        return temp;
    }

    peek() {
        return this.storage[this.pos - 1];
    }
}

const s = new Stack(5);
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.push(6);

// for(let i = 0; i < s.size; i++) {
//     console.log(s.pop());
// }

console.log(s.peek());