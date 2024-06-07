/**
 * https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/description/
 * @param {string} s
 * @return {number}
 */

var numberOfSubstrings = function(s) {

    const n = s.length
    let k = 3

    let right = 0

    let count = 0

    // b b a c b a

    const map = new Map()
    map.set('a',-1)
    map.set('b',-1)
    map.set('c',-1)

    while(right < n){
        const currChar = s[right]
        /****
         * set index here, not at last
         * we set it here and then do calculation
         * **/ 
        map.set(currChar,right)
        const a = map.get('a'), b = map.get('b'), c = map.get('c')

        const max = Math.max(a,Math.max(b,c)), min =  Math.min(a,Math.min(b,c))
        if(min > -1){
            count = Math.max(count,count + min + 1)
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