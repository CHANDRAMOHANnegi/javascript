/**
 * @param {string} 
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
    const n = s.length
    const map = new Map()

    /***
     * 
     * map me index set kar dena hai
     * 
     * jab bhi naya element agar map me hai to 
     * 
     * hame pata chal jayega ki new left kaha rakhna hai
     * 
     * **/

    let left = 0
    let right = 0

    let maxLen = 0

    while (right < n) {
        const char = s[right]
        if (map.has(char)) {
            left = Math.max(map.get(char) + 1, left)
        }
        map.set(char, right)
        maxLen = Math.max(maxLen, right - left + 1)
        right++
    }
    return maxLen
};

