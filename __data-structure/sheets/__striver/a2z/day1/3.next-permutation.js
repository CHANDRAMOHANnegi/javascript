/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


// 1,2,5,6,5,4

var nextPermutation = function (nums) {
    let firstDecreasingIndex = nums.length - 1

    // get the first-decreasing-index
    while (firstDecreasingIndex >= 0 && nums[firstDecreasingIndex - 1] >= nums[firstDecreasingIndex]) {
        firstDecreasingIndex--
    }

    // if array strictly increasing, just sort and return
    if (firstDecreasingIndex === 0) {
        return nums.sort((a, b) => a - b)
    }

    // find first greater index from end
    let firstGreaterIndexFromEnd = nums.length - 1
    while (firstGreaterIndexFromEnd > firstDecreasingIndex && nums[firstGreaterIndexFromEnd] <= nums[firstDecreasingIndex - 1]) {
        firstGreaterIndexFromEnd--
    }

    // swap with first greater index from end
    /****
     * 
     * because we want next greater permutation
     * 
     * ***/ 
    let temp = nums[firstGreaterIndexFromEnd]
    nums[firstGreaterIndexFromEnd] = nums[firstDecreasingIndex - 1]
    nums[firstDecreasingIndex - 1] = temp

    // sort the part
    const part = nums.slice(firstDecreasingIndex).sort((a, b) => a - b)
    for (let i = 0; i < part.length; i++) {
        nums[firstDecreasingIndex + i] = part[i]
    }

    return nums
};