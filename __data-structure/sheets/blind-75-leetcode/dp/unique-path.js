/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

const uniquePathsRec = (r, c, m, n) => {
    if (r === m - 1 && c === n - 1) {
        return 1
    }
    if (r >= m || c >= n) {
        return 0
    }

    const down = uniquePathsRec(r + 1, c, m, n)
    const right = uniquePathsRec(r, c + 1, m, n)

    return down + right
}

var uniquePathsDp = (r, c, m, n, dp) => {
    if (r === m - 1 && c === n - 1) {
        return dp[m - 1][n - 1] = 1
    }

    if (r >= m || c >= n) {
        return 0
    }

    if (dp[r][c] !== false) {
        return dp[r][c]
    }

    const down = uniquePathsDp(r + 1, c, m, n, dp)
    const right = uniquePathsDp(r, c + 1, m, n, dp)

    return dp[r][c] = down + right
}

var uniquePathsTab = (m, n) => {
    const dp = Array.from({ length: m }, () => Array(n).fill(0))
    dp[m - 1][n - 1] = 1

    for (let r = m - 1; r >= 0; r--) {
        for (let c = n - 1; c >= 0; c--) {
            dp[r][c] += ((r + 1) < m ? dp[r + 1][c] : 0) + ((c + 1) < n ? dp[r][c + 1] : 0)
        }
    }

    // console.log(dp)
    return dp[0][0]
}


var uniquePaths = function (m, n) {
    const dp = Array.from({ length: m }, () => Array(n).fill(false))
    // dp[m - 1][n - 1] = 1

    // return uniquePathsRec(0,0,m,n)
    // return uniquePathsDp(0,0,m,n,dp)
    return uniquePathsTab(m, n)
};
