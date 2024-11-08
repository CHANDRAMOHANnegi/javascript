/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class MinPq {
    constructor() {
        this.data = []
    }
    enqueue(num) {
        let idx = 0
        while (idx < this.data.length && this.data[idx] < num) {
            idx++
        }
        this.data.splice(idx, 0, num)
    }
    dequeue() { return this.data.shift() }
    size() { return this.data.length }
    peek() { return this.data[0] }
    remove(num) {
        const index = this.data.indexOf(num)
        if (index !== -1) this.data.splice(index, 1)
    }
}

/****
 * right is min-priority queue, increasing order
 * 25, 30, 40...
 * ***/
class MaxPq {
    constructor() {
        this.data = []
    }
    enqueue(num) {
        let idx = 0
        while (idx < this.data.length && this.data[idx] > num) {
            idx++
        }
        this.data.splice(idx, 0, num)
    }
    dequeue() { return this.data.shift() }
    size() { return this.data.length }
    peek() { return this.data[0] }
    remove(num) {
        const index = this.data.indexOf(num)
        if (index !== -1) this.data.splice(index, 1)
    }
}

var MedianFinder = function () {
    this.left = new MaxPq()
    this.right = new MinPq()
    this.size = this.left.size() + this.right.size()
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {

    /******
     * by default push to left,
     * but if right has size and num > right.peek, then push to right
     * ***/
    if (this.right.size() > 0 && num > this.right.peek()) {
        this.right.enqueue(num)
    } else {
        this.left.enqueue(num)
    }

    /******
     * if size difference > 2, sift some element to low size queue
     * ***/
    this._rebalanceHeaps()
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    // console.log(this.left,this.right)
    if (this.left.size() > this.right.size()) {
        return this.left.peek()
    } else if (this.left.size() < this.right.size()) {
        return this.right.peek()
    } else {
        return (this.left.peek() + this.right.peek()) / 2
    }
};

MedianFinder.prototype.removeNum = function (num) {
    if (this.left.size() > 0 && num <= this.left.peek()) {
        this.left.remove(num)
    } else {
        this.right.remove(num)
    }
    this._rebalanceHeaps()
};

MedianFinder.prototype._rebalanceHeaps = function () {
    if (this.left.size() > this.right.size() + 1) {
        this.right.enqueue(this.left.dequeue())
    } else if (this.right.size() > this.left.size() + 1) {
        this.left.enqueue(this.right.dequeue())
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

var medianSlidingWindow = function (nums, k) {
    var obj = new MedianFinder()

    let left = 0
    let right = 0
    const res = []

    while (right < nums.length) {
        obj.addNum(nums[right])
        if (right - left === k - 1) {
            res.push(obj.findMedian())
            obj.removeNum(nums[left])
            left++
        }
        right++
    }

    return res
};