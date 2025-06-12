class Calculator {
    constructor() {
        this.total = 0;
        this.taskQueue = [];
        this.processing = false;
    }

    #push(task) {
        this.taskQueue.push(task)
        this.processQueue();
    }

    processQueue() {
        if (this.processing) return;
        this.processing = true;

        const executeTasks = async () => {
            while (this.taskQueue.length) {
                const task = this.taskQueue.shift();
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
        this.#push(task);
        return this;
    }

    sub(num) {
        const task = () => {
            this.total -= num;
            console.log(this.total);
        };
        this.#push(task);
        return this;
    }

    mul(num) {
        const task = () => {
            this.total *= num;
            console.log(this.total);
        };
        this.#push(task);
        return this;
    }

    delay(ms) {
        const task = () => new Promise((resolve) => setTimeout(resolve, ms));
        this.#push(task);
        return this;
    }
}

const calc = new Calculator();
calc.add(2).sub(4).mul(2).delay(2000).delay(1000).add(3);

// 2
// -2
// -4
// -1
// Final result: -1 , after delay