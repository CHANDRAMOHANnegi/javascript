
/****
 * 5 10 20 25 30 40
 * left -->20, 10, 5 max-heap
 * right -->25, 30, 40 min-heap
 * dono ke peek se median aaa paye
 * **/

/****
 * left is max-priority queue, decreasing order
 * decreasing order
 * 20, 10, 5...
 * ***/
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
}

var MedianFinder = function () {
    this.left = new MaxPq()
    this.right = new MinPq()
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
    /*****
     * 
     * Muddaa ye hai ki right wale me badi values ayengi
     * 
     * Right heap is MIN-heap
     * 
     * default left me push ho rahe hai, then balance ho rahe hai
     * 
     * aur agar right ka size hai aur num bada hai peek se to yaha push karo
     * kyo ki min heap hai, yaha sare elements left walo se bade honge
     * ****/
    if (this.right.size() > 0 && num > this.right.peek()) {
        this.right.enqueue(num)
    } else {
        this.left.enqueue(num)
    }

    /******
     * if size difference > 2, sift some element to low size queue
     * ***/
    if (this.left.size() - this.right.size() === 2) {
        this.right.enqueue(this.left.dequeue())
    } else if (this.right.size() - this.left.size() === 2) {
        this.left.enqueue(this.right.dequeue())
    }
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

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */