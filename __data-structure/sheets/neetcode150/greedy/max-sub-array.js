/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

var helper = function (g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)

    let count = 0
    let li = 0

    for (const child of g) {
        for (let i = li; i < s.length; i++) {
            if (s[i] >= child) {
                s[i] = false
                count++
                li = i
                break
            }
        }
    }
    return count
};

var helper2 = function (g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)

    let count = 0

    let child = 0
    let cookie = 0

    while (cookie < s.length) {
        if (s[cookie] >= g[child]) {
            count++
            child++
        }
        cookie++
    }

    return count
};

var findContentChildren = function (g, s) {
    // return helper(g,s)
    return helper2(g, s)
};