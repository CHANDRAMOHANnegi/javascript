class Calculator {
    constructor() {
        this.operation_queue = []
        this.total = 0
        this.is_processing = false
    }

    async processor() {
        // console.log('--', this.is_processing);
        if (this.is_processing) return
        this.is_processing = true
        while (this.operation_queue.length) {
            const currentOperation = this.operation_queue.shift()
            await currentOperation()
        }
        this.is_processing = false
    }

    add(num) {
        // console.log('add');
        const operation = () => {
            this.total += num
            console.log(this.total);
        }
        this.operation_queue.push(operation)
        this.processor()
        return this
    }
    sub(num) {
        // console.log('sub');
        const operation = () => {
            this.total -= num
            console.log(this.total);
        }
        this.operation_queue.push(operation)
        this.processor()
        return this
    }
    mul(num) {
        // console.log('mul');
        const operation = () => {
            this.total *= num
            console.log(this.total);
        }
        this.operation_queue.push(operation)
        this.processor()
        return this
    }
    delay(time) {
        // console.log('delay');
        const operation = () => new Promise((res) => setTimeout(res, time))
        this.operation_queue.push(operation)
        this.processor()
        return this
    }
}

const calc = new Calculator();
calc.add(2).sub(4).mul(2).delay(2000).add(3);