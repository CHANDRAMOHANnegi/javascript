/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */


const rec = (coins, target, n) => {
    if (target < 0) return Infinity
    if (n >= coins.length) return Infinity
    if (target === 0) return 0

    const include = rec(coins, target - coins[n], n) + 1
    const exclude = rec(coins, target, n + 1)

    return Math.min(include, exclude)
}

const recDP = (coins, target, n, dp) => {
    if (target < 0) return Infinity
    if (n >= coins.length) return Infinity
    if (target === 0) return 0

    if (dp[n][target] != Infinity) return dp[n][target]

    const include = recDP(coins, target - coins[n], n, dp) + 1
    const exclude = recDP(coins, target, n + 1, dp)

    return dp[n][target] = Math.min(include, exclude)
}

var coinChange = function (coins, amount) {
    coins.sort((a, b) => b - a)
    // const res = rec(coins,amount,0)

    const dp = Array.from({ length: coins.length + 1 }, () => Array.from({ length: amount + 1 }, () => Infinity))
    // dp[0] = 0
    const res = recDP(coins, amount, 0, dp)

    return res === Infinity ? - 1 : res
};

/*****
 * 
 * 2D dp
 * 
 * answer depends on "amount" and "no of coins"
 * 
 * 
 * **/ 