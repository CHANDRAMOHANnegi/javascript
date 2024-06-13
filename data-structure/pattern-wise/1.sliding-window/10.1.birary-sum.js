/**
 * https://leetcode.com/problems/binary-subarrays-with-sum/submissions/1281524085/
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */

var numSubarraysWithSum = function (nums, goal) {

    /*****
     * https://www.youtube.com/watch?v=XnMdNUkX6VM&list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL&index=10
     * INTERESTING QUESTION
     * 
     * SO HERE ,
     * 
     * (subarrays with sum less than equal to goal) - (subarrays with sum less than equal to goal minus 1)
     * 
     * const result = f(goal) - f (goal-1)
     * 
     * find no of subarray with sum <= goal
     * 
     * 1 0 0 1 0 -> 
     * 
     * */

    return geResultLessThaEqualTo(nums, goal) - geResultLessThaEqualTo(nums, goal - 1)
};
// T -> O(2N)
// S -> O(1)

var geResultLessThaEqualTo = function (nums, goal) {
    //! important check
    if (goal < 0) return 0
    const n = nums.length
    let left = 0, right = 0

    let no = 0
    let sum = 0

    let bool = false

    while (right < n) {
        sum += nums[right]
        while (sum > goal) {
            sum -= nums[left]
            left++
        }
        /****
         * here we are adding length of the string
         * 
         * */ 
        no += right - left + 1
        right++
    }
    return no
};