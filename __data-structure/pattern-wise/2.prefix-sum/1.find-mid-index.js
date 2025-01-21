// https://leetcode.com/problems/find-the-middle-index-in-array/submissions/1515263945/

/**
 * @param {number[]} nums
 * @return {number}
 */

var findMiddleIndex = function(nums) {
    const prefixSum = nums.reduce((all,ele)=>[...all,(all[all.length-1]||0)+ele],[])

    let left = 0

    while(left < nums.length){
        const leftSum = prefixSum[left] - nums[left]
        const rightSum = prefixSum[nums.length -1] - prefixSum[left]
        if(leftSum === rightSum){
            return left
        }
        left++
    }

    return -1
};

/*****
 * we can remove extra space by calculating running sum,
 * we just need to calculate total
 * 
 * 
 * 
 * **/ 