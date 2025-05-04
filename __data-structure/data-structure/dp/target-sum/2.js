/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const helperREC = (nums, target, amt, idx) => {
    if (idx === nums.length) {
        return amt === target ? 1 : 0
    }

    const ways1 = helperREC(nums, target, amt - nums[idx], idx + 1)
    const ways2 = helperREC(nums, target, amt + nums[idx], idx + 1)

    return ways1 + ways2
}

const subsetSum = (SUM, nums) => {
    const dp = Array.from({ length: (SUM) + 1 }, () => 0)
    dp[0] = 1

    for (const num of nums) {
        for (let sum = SUM; sum >= num; sum--) {
            // * loop is in reverse order because we cannot use nums more than once || VERY IMPORTANT
            dp[sum] = dp[sum] + dp[sum - num]
        }
    }

    return dp[SUM]

}

const subsetSum2 = (SUM, nums) => {
    const dp = Array.from({ length: nums.length + 1 },
        () => Array.from({ length: SUM + 1 }).fill(0))

    for (let i = 0; i <= nums.length; i++) {
        dp[i][0] = 1
    }

    for (let i = 1; i <= nums.length; i++) {
        for (let j = 0; j <= SUM; j++) {
            dp[i][j] = dp[i - 1][j]
            if (j >= nums[i - 1]) {
                dp[i][j] += dp[i - 1][j - nums[i - 1]]
            }
        }
    }
    return dp[nums.length][SUM]
}

const helperDP = (nums, target) => {
    const totalSum = nums.reduce((all, curr) => all + curr, 0)

    if (target > totalSum || (target + totalSum) % 2 !== 0) return 0;

    const SUM = (target + totalSum) / 2
    if (SUM < 0 || SUM % 1 !== 0) return 0;

    return subsetSum(SUM, nums)
}


var findTargetSumWays = function (nums, target) {
    // const dp = Array(target + 1)
    // return helperREC(nums,target, 0 ,0)
    return helperDP(nums, target, 0, 0)
};