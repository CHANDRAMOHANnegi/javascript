/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinsPermutationDP = function (amount, coins) {
    const dp = Array(amount + 1).fill(0)
    dp[0] = 1

    for (let amt = 0; amt <= amount; amt++) {
        for (const coin of coins) {
            if (amt >= coin) {
                const rem_amt = amt - coin
                dp[amt] = dp[amt] + dp[rem_amt]
            }
        }
    }
    return dp[amount]
};

var coinChange = function (coins, amount) {
    return coinsPermutationDP(coins, amount)
};

/*****
 * 
 * 
 * WHY coins loop is inside
 * 
 * this creates permutation, for each amount we are using all coins
 * 
 * ***/ 