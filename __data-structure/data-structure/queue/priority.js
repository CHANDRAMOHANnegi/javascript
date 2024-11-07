class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(vertex, priority) {
        const element = { vertex, priority };
        let added = false;

        // Insert element in the correct position
        for (let i = 0; i < this.queue.length; i++) {
            if (priority > this.queue[i].priority) { // Change to < for min-priority queue
                this.queue.splice(i, 0, element);
                added = true;
                break;
            }
        }
        
        // If not added, push it at the end
        if (!added) {
            this.queue.push(element);
        }
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}
