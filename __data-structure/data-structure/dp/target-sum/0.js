const subsetSum = (target, nums) => {
    const dp = Array.from({ length: (target) + 1 }, () => 0)
    dp[0] = 1

    for (const num of nums) {
        for (let sum = target; sum >= num; sum--) {
            dp[sum] = dp[sum] + dp[sum - num]
        }
    }

    return dp[target]

}

console.log(subsetSum(7, [4, 2, 7, 1, 3]))


const subsetSum2 = (target, nums) => {
    const dp = Array.from({ length: nums.length + 1 },
        () => Array.from({ length: target + 1 }).fill(0))

    for (let i = 0; i <= nums.length; i++) {
        dp[i][0] = 1
    }

    for (let i = 1; i <= nums.length; i++) {
        for (let j = 0; j <= target; j++) {
            dp[i][j] = dp[i - 1][j]
            if (j >= nums[i - 1]) {
                dp[i][j] += dp[i - 1][j - nums[i - 1]]
            }
        }
    }
    return dp[nums.length][target]
}