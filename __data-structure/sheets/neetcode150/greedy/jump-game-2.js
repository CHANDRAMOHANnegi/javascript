/**
 * @param {number[]} nums
 * @return {number}
 */

const helper = (nums, idx) => {
    if (idx >= nums.length) return Infinity
    if (idx === nums.length - 1) return 0

    let min = Infinity

    for (let i = 1; i <= nums[idx]; i++) {
        const jumps = helper(nums, idx + i)
        min = Math.min(min, jumps + 1)
    }

    return min
}


const helperDP = (nums, idx, dp) => {
    if (idx >= nums.length) return Infinity
    if (idx === nums.length - 1) return dp[idx] = 0

    if (dp[idx] != Infinity) return dp[idx]

    let min = Infinity

    for (let i = 1; i <= nums[idx]; i++) {
        const jumps = helperDP(nums, idx + i, dp)
        min = Math.min(min, jumps + 1)
    }

    return dp[idx] = min
}


const optimalGreedy = (nums) => {
    let farthest = 0
    let currentEnd = 0
    let min = 0
    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i])
        if (i === currentEnd) {
            min++
            currentEnd = farthest
        }
    }
    return min
}


var jump = function (nums) {
    // return helper(nums, 0)

    // const dp = Array.from({length: nums.length + 1},()=>Infinity)
    // return helperDP(nums, 0,dp)

    return optimalGreedy(nums)
};