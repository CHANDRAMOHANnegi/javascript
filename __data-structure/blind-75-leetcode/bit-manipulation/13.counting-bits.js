/**
 * @param {number} n
 * @return {number[]}
 */

/**
 * count no of set-bits means count no of 1s
 * 
 * "use right most set bit" to count no of 1s
 * 
 */

var count = (n) => {
    let c = 0

    while (n != 0) {
        const rsbm = n & -n
        n -= rsbm
        c++
    }
    return c
}

var countBits = function (n) {
    const res = []

    for (let i = 0; i <= n; i++) {
        res[i] = count(i)
    }

    return res
};