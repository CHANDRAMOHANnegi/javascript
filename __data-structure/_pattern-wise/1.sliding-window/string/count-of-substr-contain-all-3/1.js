/**
 * https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/description/
 * @param {string} s
 * @return {number}
 */

// b b a c b a

var numberOfSubstrings = function (s) {
    const n = s.length

    let right = 0
    let count = 0

    const map = new Map()
    map.set('a', -1)
    map.set('b', -1)
    map.set('c', -1)

    while (right < n) {
        const currChar = s[right]
        /****
         * set index here, not at last
         * we set it here and then do calculation
         * **/
        map.set(currChar, right)
        const a = map.get('a'), b = map.get('b'), c = map.get('c')

        const min = Math.min(a, Math.min(b, c))
        if (min > -1) {
            count = count + min + 1
        }
        right++
        /****
         * Mistake i made was, I was setting this here
         * But why
         * **/
        // map.set(currChar,right)
    }

    return count
};