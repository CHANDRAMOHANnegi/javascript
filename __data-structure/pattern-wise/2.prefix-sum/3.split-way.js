/**
 * @param {number[]} nums
 * @return {number}
 */

var waysToSplitArray2 = function (nums) {
    const prefixSum = nums.reduce((all, ele) => [...all, (all[all.length - 1] || 0) + ele], [])

    let count = 0

    for (let i = 0; i < nums.length - 1; i++) {
        if (prefixSum[nums.length - 1] - prefixSum[i] <= prefixSum[i]) {
            count++
        }
    }

    return count
};


var waysToSplitArray = function (nums) {
    let rightSum = nums.reduce((all, ele) => all + ele, 0)
    let leftSum = 0

    let count = 0

    for (let i = 0; i < nums.length - 1; i++) {
        leftSum += nums[i]
        rightSum -= nums[i]
        if (rightSum <= leftSum) {
            count++
        }
    }

    return count
};