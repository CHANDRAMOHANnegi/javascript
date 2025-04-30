/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

/*****
 * WRONG
 * WRONG
 * WRONG
 * WRONG
 * ***/

/****
 * Here, the aim is to get amount,
 * and this greedy algorithm is focused on using min coins,
 * which may not get us to the answer
 * 
 * 
 * here this depends on the coins denomination
 * 
 * 
 * The mistake i was doing here is using min coins, and not focused on getting amount
 * 
 * FOCUS,
 * READ QUESTION PROPERLY
 * WHAT is problem actually asking
 * 
 * **/

var coinChange = function (coins, amount) {
    coins.sort((a, b) => b - a); // Sort coins in descending order

    let count = 0;
    let idx = 0;

    while (amount > 0 && idx < coins.length) {
        if (coins[idx] <= amount) {
            let numCoins = Math.floor(amount / coins[idx]); // Use as many of the current coin as possible
            count += numCoins;
            amount -= numCoins * coins[idx];
        }
        idx++;
    }

    return amount !== 0 ? -1 : count;
};

// above one is  wrong // 

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
        return -1 // return Infinity // why ! if some amount is un-reachable then we can use infinite coins to get that amount
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
 * WHY COINS LOOP IS OUTSIDE
 * 
 * 1. we can start amount from the coin and not 0
 * 2. we stake one coin and see impact of that coin on all amount
 * 
 * **/ 