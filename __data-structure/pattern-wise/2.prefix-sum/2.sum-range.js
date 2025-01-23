/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums
    
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
   return this.nums.slice(left,right+1).reduce((all,ele)=>all+ele,0)
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */


/******
 * 
 * instead of calculating sum again and again, we have made a prefix sum array
 * is consumes space, but it is faster
 * 
 * ***/ 

var NumArray = function(nums) {
    this.prefixSum = nums.reduce((all,ele)=>[...all,(all[all.length-1]||0) + ele],[])
};

NumArray.prototype.sumRange = function(left, right) {
    if(left === 0){
        return this.prefixSum[right]
    }
    return this.prefixSum[right] - this.prefixSum[left - 1]
};
