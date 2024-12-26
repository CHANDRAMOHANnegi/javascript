class TaskRunner {
    constructor(taskLimit) {
        this.taskLimit = taskLimit
        this.taskQueue = []
        this.currentTaskCount = 0
    }

    executeTask() {
        console.log(this.currentTaskCount);
        if (this.currentTaskCount < this.taskLimit && this.taskQueue.length) {
            this.currentTaskCount++
            const task = this.taskQueue.shift()
            task().then(() => {

            }).catch(() => {

            }).finally(() => {
                this.currentTaskCount--
                this.executeTask()
            })
        }

    }

    push(task) {
        // TODO
        if (this.currentTaskCount < this.taskLimit) {
            this.taskQueue.push(task)
            this.executeTask()
        } else {
            this.taskQueue.push(task)
        }
    }

}

const wait = (ms) => new Promise((res) => setTimeout(res, ms))

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