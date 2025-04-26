/**
 * @param {number} n
 * @return {number}
 */

// return no of ways to reach (n)
var climbStairsRec = function (n) {
    if (n === 0)// reached the nth step
        return 1
    if (n < 0)// not able to reach nth step
        return 0

    console.log(n)
    const stepOne = climbStairsRec(n - 1) // no of ways to reach (n - 1)th step (last step)
    const stepTwo = climbStairsRec(n - 2) // no of ways to reach (n - 2)th step (second last step)

    return stepOne + stepTwo
};

// return no of ways to reach (n)
var climbStairsDp = function (n, dp) {
    if (n === 0)// reached the nth step
        return 1
    if (n < 0)// not able to reach nth step
        return 0

    if (dp[n] != false)
        return dp[n]

    console.log(n)

    const stepOne = climbStairsDp(n - 1, dp) // no of ways to reach (n - 1)th step
    const stepTwo = climbStairsDp(n - 2, dp) // no of ways to reach (n - 2)th step

    dp[n] = stepOne + stepTwo
    return dp[n]
};

var climbStairs = function (n) {

    // return climbStairsRec(n)

    const dp = Array.from({ length: n + 1 }, () => false);
    // dp[0] = 1;

    return climbStairsDp(n, dp)
}


climbStairs(5)