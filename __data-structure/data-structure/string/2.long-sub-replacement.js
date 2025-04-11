/**
 * https://leetcode.com/problems/longest-repeating-character-replacement/submissions/1281340279/
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var characterReplacement = function (s, k) {
    const n = s.length
    let left = 0, right = 0

    const charMap = {}
    let maxFreq = 0
    let maxLen = 0

    while (right < n) {
        /***
         * we add new char to the map, and increase frequency
         * 
         * ***/
        const currChar = s[right]
        charMap[currChar] = (charMap[currChar] || 0) + 1
        maxFreq = Math.max(maxFreq, charMap[currChar])

        /***
         * const len = right - left + 1
         * !don't use constants in while looping, they don't change
         * **/

        /****
         * we are removing character from left
         * 
         * ***/
        while (right - left + 1 > k + maxFreq) {
            /*****
             * HERE we din't update the maxFrequency
             * reducing frequency will not help increasing my answer 
             * 
             * !=====IMPORTANT ======
             * This is very important
             * https://youtu.be/_eNhaDCr6P0?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL&t=1349
             * ***/
            charMap[s[left++]] -= 1
        }

        maxLen = Math.max(maxLen, right - left + 1)
        right++
    }

    return maxLen
};


/*****
 * no need to keep track of longest freq char
 * 
 * 
 * **/ 