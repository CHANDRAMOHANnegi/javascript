// https://www.youtube.com/watch?v=qroD9lvgGQ4&list=PL-Jc9J83PIiHq5rMZasunIR19QG3E-PAA&index=19
class PQ {
    #data
    constructor(comparator) {
        this.#data = []
        this.comparator = comparator
    }
    size() {
        return this.#data.length
    }
    peek() {
        if (this.size() === 0) {
            return -1
        }
        return this.#data[0]
    }
    add(num) {
        this.#data.push(num)
        this.#upHeapify(this.size() - 1)
    }

    remove() {
        if (this.size() === 0) {
            return -1
        }
        this.swap(this.#data, 0, this.size() - 1)
        const num = this.#data.pop()
        this.#downHeapify(0)
        return num
    }

    #upHeapify(child) {
        if (child === 0) return

        const pi = this.parentIndex(child)
        /***
         * if parent priority is lower, then upHeapify
         * 
         * **/
        if (this.comparator(this.#data[pi], this.#data[child]) > 0) {
            this.swap(this.#data, child, pi)
            this.#upHeapify(pi)
        }
    }

    #downHeapify(pi) {
        let li = this.leftIndex(pi), ri = this.rightIndex(pi)
        let highPriorityIndex = pi
        /***
         * compare with this.#data[highPriorityIndex]
         * **/
        if (li < this.size() && this.comparator(this.#data[li], this.#data[highPriorityIndex]) < 0) {
            highPriorityIndex = li
        }
        /***
         * compare with this.#data[highPriorityIndex]
         * **/
        if (ri < this.size() && this.comparator(this.#data[ri], this.#data[highPriorityIndex]) < 0) {
            highPriorityIndex = ri
        }
        if (highPriorityIndex !== pi) {
            this.swap(this.#data, pi, highPriorityIndex)
            this.#downHeapify(highPriorityIndex)
        }
    }

    /***
     * child - 1,
     * not 
     * child + 1
     * **/
    parentIndex(child) {
        return Math.floor((child - 1) / 2)
    }

    rightIndex(parent) {
        return (parent * 2) + 2
    }

    leftIndex(parent) {
        return (parent * 2) + 1
    }

    swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]] // Fixed syntax
    }
}



const pq = new PQ();
pq.add(10);
pq.add(5);
pq.add(15);
pq.add(2);

console.log(pq.peek()); // Expected: 2
console.log(pq.remove()); // Expected: 2
console.log(pq.remove()); // Expected: 5
console.log(pq.remove()); // Expected: 10
console.log(pq.remove()); // Expected: 15
console.log(pq.remove()); // Expected: -1
