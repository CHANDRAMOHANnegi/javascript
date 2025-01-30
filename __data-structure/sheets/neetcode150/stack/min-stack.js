// https://leetcode.com/problems/min-stack/

/***
 * How do we store the min value
 * 
 * so, for every value, it can store min value till that value
 * 
 * **/ 


var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push({
        val,
        min: this.stack.length ? Math.min(this.getMin(), val) : val
    })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.stack.pop().val
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1].val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
   return this.stack[this.stack.length - 1].min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */