/**
 * @param {number[]} nums
 * @return {number}
 */

const getProfit = (nums) => {
    let profit = nums[0]
    let total = nums[0]

    for (let i = 1; i < nums.length; i++) {
        if (total + nums[i] > nums[i]) {
            total += nums[i]
        } else {
            total = nums[i]
        }
        if (total > profit) {
            profit = total
        }

    }
    return profit
}

const kadanes = (nums) => {
    let sum = 0
    let max = -Infinity

    for (const num of nums) {
        sum += num
        max = Math.max(max, sum)

        if (sum < 0) {
            sum = 0
        }
    }

    return max
}

var maxSubArray = function (nums) {
    return getProfit(nums)
    // return kadanes(nums)
};