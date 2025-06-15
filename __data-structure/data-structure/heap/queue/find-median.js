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

  peek() {
    return this.queue[0];
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

var MedianFinder = function () {
  this.minHeap = new Heap();
  this.maxHeap = new Heap((a, b) => b - a);
  return null;
};

/**
 * @param {number} num
 * @return {void}
 */

// max - 3, 2, 1
// min - 4, 5

MedianFinder.prototype.addNum = function (num) {
  /***
   * maxHeap is default heap for adding values, so we start with maxHeap
   *
   * so size of maxHeap can become 1 greater than minHeap
   *
   * if(max > min + 1){
   *    balance
   * }
   *
   * ***/

  // The extra element is always in maxHeap when the total number of elements is odd.

  if (this.maxHeap.size() === 0 || this.maxHeap.peek() >= num) {
    this.maxHeap.add(num); // by default add to maxHeap
  } else {
    this.minHeap.add(num); // by default add to maxHeap
  }

  if (this.maxHeap.size() > this.minHeap.size() + 1) {
    this.minHeap.add(this.maxHeap.remove());
  } else if (this.minHeap.size() > this.maxHeap.size()) {
    // The extra element is always in maxHeap when the total number of elements is odd.
    // if extra element comes in minHeap, we push it to maxHeap
    this.maxHeap.add(this.minHeap.remove());
  }
  return null;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.minHeap.size() < this.maxHeap.size()) {
    return this.maxHeap.peek();
  }
  if (this.minHeap.size() > this.maxHeap.size()) {
    return this.minHeap.peek();
  }
  return ((this.minHeap.peek() ?? 0) + (this.maxHeap.peek() ?? 0)) / 2; //.toFixed(1)
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
