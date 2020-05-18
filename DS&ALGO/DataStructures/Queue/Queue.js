class Queue {
    constructor(size) {
        this.size = size;
        this.head = 0;
        this.tail = 0;
        this.storage = {};
    }

    enqueue(element) {
        if(this.tail <= this.size) {
            this.storage[this.tail] = element;
            this.tail++;
        }
        else {
            console.log('queue is full!');
        }
    }

    dequeue() {
        if(this.head <= 0) {
            let temp = this.head;
            delete this.storage[this.head];
            this.head++;
        }
        else {
            console.log('no more elements in queue');
        }
    }
}

const q = new Queue(5);

console.log(q);

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q);

q.dequeue();

console.log(q);

q.enqueue(2);

console.log(q);