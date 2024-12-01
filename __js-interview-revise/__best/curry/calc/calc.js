class Calculator {
    constructor() {
        this.total = 0;
        this.queue = [];
        this.processing = false;
    }

    processQueue() {
        if (this.processing) return;
        this.processing = true;

        const executeTasks = async () => {
            while (this.queue.length) {
                const task = this.queue.shift();
                await task();
            }
            this.processing = false;
            console.log("Final result:", this.total); // Automatically log final result
        };

        executeTasks();
    }

    add(num) {
        const task = () => {
            this.total += num;
            console.log(this.total);
        };
        this.queue.push(task);
        this.processQueue();
        return this;
    }

    sub(num) {
        const task = () => {
            this.total -= num;
            console.log(this.total);
        };
        this.queue.push(task);
        this.processQueue();
        return this;
    }

    mul(num) {
        const task = () => {
            this.total *= num;
            console.log(this.total);
        };
        this.queue.push(task);
        this.processQueue();
        return this;
    }

    delay(ms) {
        const task = () => new Promise((resolve) => setTimeout(resolve, ms));
        this.queue.push(task);
        this.processQueue();
        return this;
    }
}

const calc = new Calculator();
calc.add(2).sub(4).mul(2).delay(2000).add(3);

// 2
// -2
// -4
// -1
// Final result: -1 , after delay