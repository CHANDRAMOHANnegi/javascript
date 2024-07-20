/**
 * https://leetcode.com/problems/longest-repeating-character-replacement/submissions/1281340279/
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var characterReplacement = function(s, k) {
    const n = s.length
    let left = 0, right = 0

    const charMap = {}
    let maxFreq = 0
    let maxLen = 0

    while(right < n){
        const currChar = s[right]
        charMap[currChar]= (charMap[currChar] || 0) + 1
        maxFreq = Math.max(maxFreq, charMap[currChar])

        while(right - left + 1 - maxFreq > k){
            /*****
             * HERE we din't update the maxFrequency
             * reducing frequency will not help increasing my answer 
             * 
             * !=====IMPORTANT ======
             * This is very important
             * https://youtu.be/_eNhaDCr6P0?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL&t=1349
             * ***/ 
            charMap[s[left]]-=1
            left++
        }

        maxLen = Math.max(maxLen,right - left + 1)
        right++
    }
     
    return maxLen
};
