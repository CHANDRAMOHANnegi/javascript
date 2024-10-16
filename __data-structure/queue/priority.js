class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(vertex, priority) {
        this.queue.push({ vertex, priority });
        this.sort();
    }

    dequeue() {
        return this.queue.shift();
    }

    sort() {
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    isEmpty() {
        return !this.queue.length;
    }
}

module.exports = { PriorityQueue }