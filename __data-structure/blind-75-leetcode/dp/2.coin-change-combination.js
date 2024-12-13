/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinsCombinationDP = function (amount, coins) {
    const dp = Array(amount + 1).fill(0)
    dp[0] = 1
    /***
     * this question is no of ways, so dp[0]=1, means 1 ways
     * 
     * this is different from no of coins needed
     * ***/

    for (const coin of coins) {
        for (let amt = coin; amt <= amount; amt++) {
            const rem_amt = amt - coin
            dp[amt] = dp[amt] + dp[rem_amt]
        }
    }

    return dp[amount]
};

var coinChange = function (coins, amount) {
    return coinsCombinationDP(coins, amount)
};

/*****
 * 
 * 
 * WHY coins loop is outside
 * 
 * this creates combination,
 * otherwise any coins will 
 * come at any position
 * 
 * 
 * 
 * ***/ 