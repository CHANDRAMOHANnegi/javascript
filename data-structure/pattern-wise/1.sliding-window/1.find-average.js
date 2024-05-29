// https://leetcode.com/problems/maximum-average-subarray-i/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let start = 0
    let end = k - 1 

    let sum = 0

    for(let i = 0; i < k; i++){
        sum += nums[i]
    }

    let maxAvg =  sum / k;

    while(end < nums.length){
        end++
        if(end < nums.length){
            /**
             * concentrate here at logic, don't just leave it ram-bharose
             * we have to remove previous start and thats all,
             * Focus
             * **/
            sum = sum - nums[start++] + nums[end]
            maxAvg =  Math.max(maxAvg,sum / k);
        }
    }

    return maxAvg
};