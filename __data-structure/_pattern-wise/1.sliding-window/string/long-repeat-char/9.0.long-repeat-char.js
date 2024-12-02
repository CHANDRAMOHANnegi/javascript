/**
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * 
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

/****
 * HERE we are getting all different character that are in the char obj
 * 
 * then for every char we are traversing as if other char are changed to this char
 * 
 * */ 

var characterReplacement = function (s, k) {
    const n = s.length
    let maxLen = 0

    const char = {}

    for (let i = 0; i < n; i++)
        char[s[i]] = i

    const keys = Object.keys(char)

    for (const c of keys) {
        let right = 0;
        let left = 0;
        let diff = 0

        while (right < n) {
            const currChar = s[right]
            if (currChar !== c) {
                diff++
            }

            while (diff > k) {
                if (s[left] != c) {
                    diff--
                }
                left++
            }
            maxLen = Math.max(maxLen, right - left + 1)
            right++
        }
    }
    return maxLen
};

/***
 * Again same mistake Assumed problem, din't read it properly
 * 
 * READ PROPERLY
 * 
 * **/ 