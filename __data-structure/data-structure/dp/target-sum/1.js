function subsetSumToK(n, k, arr) {

    const dp = Array.from({ length: n + 1 }, () => Array.from({ length: k + 1 }))

    for (let i = 0; i < n; i++) {
        dp[i][0] = true
    }

    for (let i = 1; i <= n; i++) {
        console.log(dp);

        for (let j = 1; j <= k; j++) {
            const notInvolved = dp[i - 1][j]
            const involved = dp[i - 1][j - arr[i - 1]]
            dp[i][j] = notInvolved || involved
        }
    }

    return dp[n][k]
}

// console.log(subsetSumToK(5, 4, [2, 5, 1, 6, 7]))

/********
 * 
 * difference between target-sum and coin change
 * 
 * in target-sum, we may or may not use that value, thats why we can look-up in row, or look back in previous row
 * 
 * in coin change
 * 
 * ****/


function subsetSumToK2(k, nums) {
    // Initialize DP table: dp[i] represents the number of ways to form sum i
    const dp = Array(k + 1).fill(0);
    dp[0] = 1; // There's one way to achieve sum 0: by not choosing any element

    // Loop over each number in nums
    for (const num of nums) {
        // Update dp array for sums from S1 down to num
        for (let sum = k; sum >= num; sum--) {
            dp[sum] += dp[sum - num]; // Add the ways to form sum - num to sum
        }
    }
    console.log(dp);

    // Return the number of ways to form sum k using all elements
    return dp[k];
}

console.log(subsetSumToK2(4, [6, 1, 2, 1]))

// * loop is in reverse order because we cannot use nums more than once || VERY IMPORTANT