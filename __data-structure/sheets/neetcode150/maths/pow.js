/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */


const helper = (x, n) => {
    if (n === 0) return 1
    if (n < 0) {
        x = 1 / x
        n = -n
    }
    if (n % 2 === 0) {
        // return helper(x * x, n / 2)
        const half = helper(x, n / 2)
        return half * half
    } else {
        return x * helper(x, n - 1)
    }
}

var myPow = function (x, n) {
    return helper(x, n)
};