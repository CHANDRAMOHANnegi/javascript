const subsetSum = (SUM, nums) => {
    const dp = Array.from({ length: (SUM) + 1 }, () => 0)
    dp[0] = 1

    for (const num of nums) {
        for (let sum = SUM; sum >= num; sum--) {
            dp[sum] = dp[sum] + dp[sum - num]
        }
    }

    return dp[SUM]

}

console.log(subsetSum(7, [4, 2, 7, 1, 3]))