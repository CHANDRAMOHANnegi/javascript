/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function(target, nums) {
    let sum = 0
    let start = 0
    let end  = 0

    let len = Infinity

    /***
     * 
     * sirf one side se add nahi karna hai
     * 
     * remove bhi karna hai
     * 
     * jo me pehle kar raha tha, vaha bas add kar raha tha
     * 
     * FOCUS
     * */ 

    while(end < nums.length){
        sum += nums[end]

        while(sum >= target){
            len = Math.min(len,end - start + 1)
            sum -= nums[start++]
        }
        
        end++
    }

    return len > nums.length ? 0 : len 
};