/**
 * @param {number} n
 * @return {number}
 */

/**
 * count no of set-bits means count no of 1s
 * 
 * "use right most set bit" to count no of 1s
 * 
 */

// number of set bits (hamming-weight)

var hammingWeight = function(n) {
    let c = 0

    while(n != 0){
        const rsbm = n & -n
        n -= rsbm
        c++
    }
    return c 
}