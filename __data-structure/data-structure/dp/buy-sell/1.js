/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    let min = prices[0]
    let maxProfit = 0
    let idx = 1
    while (idx < prices.length) {
        if (prices[idx] < min) {
            min = prices[idx]
        }
        maxProfit = Math.max(maxProfit, prices[idx] - min)

        idx++
    }
    return maxProfit
};