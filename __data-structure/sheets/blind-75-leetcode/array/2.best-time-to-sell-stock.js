/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    let leastTillNow = prices[0]

    let profit = 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < leastTillNow) {
            leastTillNow = prices[i]
        }
        profit = Math.max(profit, prices[i] - leastTillNow)
    }

    return profit
};

/*******
 * here we just need min value till now,
 * and when-ever we move forward, we find profit
 * 
 * so we calculate minValue at each point
 * 
 * *****/ 


/*****
 * What was i doing wrong
 * i was calculating diff for every point
 * *****/ 