/**
 * @param {number[]} prices
 * @return {number}
 */

const way1 = (prices) => {
    let buy = 0
    let sell = 1
    let profit = 0

    while (sell < prices.length) {
        while (sell < prices.length && prices[sell] > prices[sell - 1]) {
            sell++
        }
        profit += prices[sell - 1] - prices[buy]
        buy = sell
        sell++
    }

    return profit
}

const way2 = (prices) => {
    let buy = 0
    let profit = 0

    for (let sell = 1; sell <= prices.length; sell++) {
        if (prices[sell] > prices[sell - 1]) {
        } else {
            profit += prices[sell - 1] - prices[buy]
            buy = sell
        }
    }
    return profit
}


const way3 = (prices) => {
    let profit = 0

    for (let i = 1; i < prices.length; i++) {
        profit += Math.max(0, (prices[i] - prices[i - 1]))
    }
    return profit
}

var maxProfit = function (prices) {

    // return way1(prices)
    // return way2(prices)
    return way3(prices)
};