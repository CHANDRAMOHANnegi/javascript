/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
    const n = s.length
    const map = new Map()

    let left = 0
    let right = 0

    let maxLen = 0

    while (right < n) {
        const char = s[right]
        if (map.has(char)) {
            // left = map.get(char) + 1
            /****
             * 
             * what if that element is on the left side of window
             * means out of window
             * 
             * for that we are comparing its position and current left
             * 
             * here we update the new left to the repeating chart old (index + 1), 
             * from there we can start a new string which will have no repeating char
             * 
             * ***/
            left = Math.max(map.get(char) + 1, left)
        }
        map.set(char, right)
        maxLen = Math.max(right - left + 1, maxLen)
        right++
    }
    return maxLen
};

// 0 1 2
// 2 - 0 = 2
// that's why (right - left + 1)


/*****
 * any problems that involves finding maximum of substring
 * 
 * then consider sliding-window
 * 
 * 
 * *****/ 