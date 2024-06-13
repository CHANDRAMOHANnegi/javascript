/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */

/****
 * WRONG APPROACH
 * WRONG APPROACH
 * 
 * Why it is not working
 * On removing zeros, sum is not getting affected 
 * 
 * 
 * */ 

var numSubarraysWithSum = function (nums, goal) {

    const n = nums.length
    let left = 0, right = 0

    let no = 0
    let sum = 0

    let bool = false

    while (right < n) {
        sum += nums[right]
        if (sum === goal)
            no++

        while (sum > goal) {
            sum -= nums[left]
            if (sum === goal) {
                no++
            }
            left++
        }
        right++
    }

    return no
};