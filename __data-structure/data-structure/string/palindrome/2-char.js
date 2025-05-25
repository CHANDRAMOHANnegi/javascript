/**
 * @param {string[]} words
 * @return {number}
 * 
 * https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/?envType=daily-question&envId=2025-05-25
 * 
 */


var longestPalindrome = function (words) {
    const map = new Map()

    for (const w of words) {
        map.set(w, (map.get(w) ?? 0) + 1)
    }

    let count = 0
    let hasOddSelfPair = false

    for (const [key, value] of map.entries()) {
        const pair = key[1] + key[0];
        if (pair === key) { // if reverse is same
            count += Math.floor(value / 2) * 4
            if (value % 2 !== 0) hasOddSelfPair = true
        } else if (map.has(pair)) {
            count += Math.min(map.get(pair) ?? 0, value) * 2 * 2
            map.set(pair, 0)
        }
    }

    if (hasOddSelfPair) count += 2 // this is important

    return count
};

/****
 * 
    Input: words = ["ab","ty","yt","lc","cl","ab"]
    Output: 8
    Explanation: One longest palindrome is "ty" + "lc" + "cl" + "yt" = "tylcclyt", of length 8.
    Note that "lcyttycl" is another longest palindrome that can be created.
 * 
 * **/ 