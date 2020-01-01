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


// palidrome

let str = "r";
let temp = "";

const s = new Stack(str.length);

for(let i = 0; i < s.size; i++) {
    s.push(str.charAt(i));
}

for(let i = 0; i < s.size; i++) {
    temp += s.pop();
}

if(str === temp) {
    console.log("it is palidrome");
}
else {
    console.log("it isn't a palidrome");
}

