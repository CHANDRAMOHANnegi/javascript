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