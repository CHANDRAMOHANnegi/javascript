/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

const coinsRec = function (coins, target, idx) {
    if (target <= 0 || idx == coins.length) {
        if (target === 0) {
            return 0
        }
        return -1
    }

    let includeRes = coinsRec(coins, target - coins[idx], idx)
    let excludeRes = coinsRec(coins, target, idx + 1)

    includeRes = includeRes === -1 ? Infinity : includeRes + 1
    excludeRes = excludeRes === -1 ? Infinity : excludeRes

    const res = Math.min(
        includeRes,
        excludeRes,
    )

    return res === Infinity ? -1 : res
}

/*********
 * 
 * Recite this one
 * 
 * ratta mar le bhai
 * 
 * ********/

const coinsRecDP = function (coins, target) {
    const dp = Array(target + 1).fill(Infinity)
    dp[0] = 0

    for (const coin of coins) {
        for (let amount = coin; amount <= target; amount++) {
            dp[amount] = Math.min(dp[amount], dp[amount - coin] + 1)
        }
    }
    return dp[target] === Infinity ? -1 : dp[target]
}


var coinChange = function (coins, amount) {
    // coins.sort((a,b)=>b-a)
    // console.log(coins)
    // return coinsRec(coins, amount, 0)
    return coinsRecDP(coins, amount)
};

/*****
 * 
 * 
 * this question is NUMBER of coins needed, so dp[0]=0
 * 
 * 
 * coins loop can be inside or outside, doesn't matter
 * 
 * other question are not of ways, so dp[0]=0
 * 
 * 
 * ***/ 