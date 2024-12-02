/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 * 
 * this is same as fruits basket problem
 */

class Solution {
    longestKSubstr(s, k) {
        const n = s.length

        let left = 0
        let right = 0
        let maxLen = -1

        let map = new Map()

        while (right < n) {
            /**
             * I was making mistake here, I was setting index instead of count
             * */
            map.set(s[right], map.has(s[right]) ? map.get(s[right]) + 1 : 1)
            while (map.size > k) {
                const leftChar = s[left]
                map.set(leftChar, map.get(leftChar) - 1)
                if (map.get(leftChar) === 0) {
                    map.delete(leftChar)
                }
                left++
            }
            /**
             * I made mistake here, i dint use this check
             * */
            if (map.size === k) {
                maxLen = Math.max(maxLen, right - left + 1)
            }
            right++
        }

        return maxLen
    }
}

/****
 * What went wrong
 * 
 * 1. I was blindly setting index as value of map, why why why
 * i needed count when removing  so i need to set count
 * 
 * Focus Focus Focus Focus Focus Focus 
 * 
 * 2. I was updating max every time, I need to update max only when we have K unique elements
 * 
 * **/ 