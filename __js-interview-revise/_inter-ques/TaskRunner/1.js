

class TaskRunner {
    constructor(concurrency) {
        this.concurrency = concurrency
        this.taskQueue = []
        this.currentTask = 0
    }

    async push(task) {
        if (this.currentTask < this.concurrency) {
            await this.execute(task)
        } else {
            this.taskQueue.push(task)
        }
    }

    async execute(task) {
        this.currentTask++
        try {
            await task()
        } catch (error) {

        } finally {
            this.currentTask--
            if (this.taskQueue.length && this.currentTask < this.concurrency) {
                const nextTask = this.taskQueue.shift()
                this.execute(nextTask)
            }
        }
    }
}

const wait = (delay = 0) => new Promise((res) => setTimeout(res, delay))

const t1 = async () => {
    console.log("t1 start");
    await wait(2000)
    console.log("t1 end");
}

const t2 = async () => {
    console.log("t2 start");
    await wait(1000)
    console.log("t2 end");
}

const t3 = async () => {
    console.log("t3 start");
    await wait(1500)
    console.log("t3 end");
}

const t4 = async () => {
    console.log("t4 start");
    await wait(1000)
    console.log("t4 end");
}

const t5 = async () => {
    console.log("t5 start");
    await wait(500)
    console.log("t5 end");
}

const taskRunner = new TaskRunner(3)

taskRunner.push(t1)
taskRunner.push(t2)
taskRunner.push(t3)
taskRunner.push(t4)
taskRunner.push(t5)