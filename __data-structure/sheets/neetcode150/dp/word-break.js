/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// dfs is substring tll idx be made using wordDict
const dfs = (s, wordDict, idx) => {
    if (idx === s.length) return true

    for (const w of wordDict) {
        if (idx + w.length <= s.length &&
            s.substring(idx, idx + w.length) === w) {
            if (dfs(s, wordDict, idx + w.length)) {
                return true
            }
        }
    }

    return false
}

const dfsDP = (s, wordDict, idx, dp) => {
    if (idx === s.length) return dp[idx] = true

    if (dp[idx] !== undefined) return dp[idx]

    for (const w of wordDict) {
        if (idx + w.length <= s.length &&
            s.substring(idx, idx + w.length) === w) {
            if (dfsDP(s, wordDict, idx + w.length, dp)) {
                return dp[idx] = true
            }
        }
    }

    return dp[idx] = false
}

var wordBreak = function (s, wordDict) {
    // return dfs(s, wordDict, 0)

    const dp = Array.from({ length: s.length + 1 })

    return dfsDP(s, wordDict, 0, dp)

};