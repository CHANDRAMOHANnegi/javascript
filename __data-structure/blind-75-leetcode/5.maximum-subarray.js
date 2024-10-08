/**
 *  @param {number[]} nums
 *  @return {number}
 */   

var maxSubArray = function (nums) {

    let max = nums[0]
    let sum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (sum < 0) {
            sum = 0
        }
        sum += nums[i]
        if (sum > max) {
            max = sum
        }
    }
    return max
};


/******
 * What was i thinking wrong here,
 * 
 * 1. I was thinking of elements,but we just needed max sum, not the elements included in the sum
 * 
 * 2. I was thinking of using hashmap to store previous sum, but here we just needed max sum,
 *    a single variable can do it
 * 
 * 
 * Kadane’s Algorithm
 * 
 * ******/ 