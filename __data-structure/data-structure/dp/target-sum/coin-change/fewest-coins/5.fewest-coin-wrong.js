/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */


const rec = (coins, target, coin, n) => {
    if (target < 0) return -1
    if (n >= coins.length) return -1
    if (target === 0) return 0

    let count = 0

    if (target - coins[n] > 0) {// this loop is of no need, 
        count = rec(coins, target - coins[n], n) + 1
        // -ve number return kar rahe hai, to +1 karke to galat hi answer ayega na
    } else {
        count += rec(coins, target - coins[n], n + 1)
    }

    /***
     * recursion ho raha hai to in dono calls me se ek hi lagegi yaha, 
     * par hame to dono calls karni chahiye 
     * and then un dono calls se, mis nikalna chahiye
     * **/

    return count
}


var coinChange = function (coins, amount) {
    coins.sort((a, b) => b - a)
    return rec(coins, amount, 0)
};