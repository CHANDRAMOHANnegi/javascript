class Heap {
  constructor(comparator) {
    this.queue = [];
    // Default to min heap if no comparator provided
    this.comparator = comparator || ((a, b) => a - b);
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index) {
    return index * 2 + 1;
  }

  rightChildIndex(index) {
    return index * 2 + 2;
  }

  size() {
    return this.queue.length;
  }

  swap(i, j) {
    [this.queue[i], this.queue[j]] = [this.queue[j], this.queue[i]];
  }

  upHeapify(index) {
    const parentIndex = this.parentIndex(index);
    // only upHeapify if child priority is higher than parent priority
    if (
      index > 0 &&
      this.comparator(this.queue[index], this.queue[parentIndex]) < 0
    ) {
      this.swap(parentIndex, index);
      this.upHeapify(parentIndex);
    }
  }

  downHeapify(index) {
    let minPriorityIndex = index;
    const leftIndex = this.leftChildIndex(index);

    if (
      leftIndex < this.size() &&
      this.comparator(this.queue[leftIndex], this.queue[minPriorityIndex]) < 0
    ) {
      minPriorityIndex = leftIndex;
    }
    const rightIndex = this.rightChildIndex(index);

    if (
      rightIndex < this.size() &&
      this.comparator(this.queue[rightIndex], this.queue[minPriorityIndex]) < 0 // use number not index, be careful
    ) {
      minPriorityIndex = rightIndex;
    }

    if (minPriorityIndex !== index) {
      this.swap(minPriorityIndex, index);
      this.downHeapify(minPriorityIndex);
    }
  }

  add(ele) {
    this.queue.push(ele);
    this.upHeapify(this.size() - 1);
  }

  remove() {
    const root = this.queue[0];
    this.swap(0, this.size() - 1);
    this.queue.pop();
    this.downHeapify(0);

    return root;
  }
}

const pq = new Heap();

pq.add(5);
pq.add(2);
pq.add(6);
pq.add(1);

console.log(pq);
// console.log(pq.remove(), pq) // 1
// console.log(pq.remove(), pq) // 2
// console.log(pq.remove(), pq) // 5
// console.log(pq.remove(), pq) // 6

module.exports = { Heap };

// Example heap: [10, 20, 30]
// Size = 3, valid indices are 0, 1, 2

let index = 1; // Element 20
let leftIndex = this.leftChildIndex(1); // (1 * 2) + 1 = 3
let rightIndex = this.rightChildIndex(1); // (1 * 2) + 2 = 4

// leftIndex = 3, but our array only has indices 0, 1, 2
// rightIndex = 4, also out of bounds!

// Without the check:
this.queue[3]; // undefined!
this.queue[4]; // undefined!
