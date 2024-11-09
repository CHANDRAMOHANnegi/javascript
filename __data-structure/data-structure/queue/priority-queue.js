class PriorityQueue {
    constructor() {
        this.data = []
    }

    add(val) {
        this.data.push(val)
        this.#heapifyUp(this.size() - 1)
    }

    swap(i, j) {
        const temp = this.data[i]
        this.data[i] = this.data[j]
        this.data[j] = temp
    }

    #heapifyUp(index) {
        if (index === 0) {
            return
        }
        const pi = this.parent(index)
        if (this.data[index] < this.data[pi]) {
            this.swap(index, pi)
            this.#heapifyUp(pi)
        }
    }

    #heapifyDown(pi) {
        let mini = pi
        let li = this.leftChild(pi)
        if (li < this.size() && this.data[li] < this.data[mini]) {
            mini = li
        }

        let ri = this.rightChild(pi)
        if (ri < this.size() && this.data[ri] < this.data[mini]) {
            mini = ri
        }
        if (mini !== pi) {
            this.swap(pi, mini)
            this.#heapifyDown(mini)
        }
    }

    remove() {
        if (this.size() === 0) {
            return -1
        }
        this.swap(0, this.size() - 1)
        let val = this.data.pop()
        this.#heapifyDown(0)
        return val
    }

    peek() {
        return this.size() > 0 ? this.data[0] : -1
    }

    size() {
        return this.data.length
    }

    // index of the parent node
    parent(index) {
        return Math.floor((index - 1) / 2)
    }

    // index of the left child node
    leftChild(index) {
        return (index * 2) + 1
    }

    // index of the right child node
    rightChild(index) {
        return (index * 2) + 2
    }
}

const pq = new PriorityQueue()

pq.add(5)
pq.add(2)
pq.add(6)
pq.add(1)

console.log(pq)
// console.log(pq.remove(), pq)
// console.log(pq.remove(), pq)
