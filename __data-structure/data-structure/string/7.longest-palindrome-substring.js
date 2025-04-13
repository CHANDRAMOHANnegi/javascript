/**
 * @param {string} s
 * @return {string}
 */

// cbacabd

const expand = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--
        right++
    }

    /****
     * 
     * After exiting the loop, left and right are outside the valid palindrome bounds, 
     * so the correct substring lies within left + 1 to right - 1.
     * 
     * !
     * why "left + 1" and not "left"
     * 
     * both left and right are pushed outward and end on character that don't
     * match , so we shrink back by "+1" on left and not include right
     * 
     * left, right + 1
     * 
     * increase left by 1, decrease right by 1
     * we push this window inward, so increase left by 1, decrease right by 1
     * return s.substring(left,right + 1)
     * ***/
    // return s.slice(left, right + 1)
    return s.slice(left + 1, right)
}

var longestPalindrome = function (s) {
    let max = ""
    for (let i = 0; i < s.length; i++) {
        const expandOdd = expand(s, i, i)
        const expandEven = expand(s, i, i + 1)
        let nexMax
        if (expandOdd.length > expandEven.length) {
            nexMax = expandOdd
        } else {
            nexMax = expandEven
        }
        /****
         * i was not updating max properly
         * FOCUS
         * ****/

        if (nexMax.length > max.length) {
            max = nexMax
        }

    }
    return max
};

/*****
 * This is base for other palindrome problems
 * ****/ 