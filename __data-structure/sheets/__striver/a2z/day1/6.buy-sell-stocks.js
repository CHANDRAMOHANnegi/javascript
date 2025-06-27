/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    let buyPrice = prices[0]
    let profit = 0

    for (let day = 1; day < prices.length; day++) {
        const profitIfSoldToday = prices[day] - buyPrice
        if (profitIfSoldToday > profit)
            profit = profitIfSoldToday
        if (buyPrice > prices[day])
            buyPrice = Math.min(buyPrice, prices[day])
    }

    return profit
};