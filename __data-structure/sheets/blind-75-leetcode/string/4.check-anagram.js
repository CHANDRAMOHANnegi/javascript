/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const freqMap = new Map();
    /*****
     * is length is not same, they are not anagram, return false, no need to swap
     * ***/ 
    if (t.length > s.length) {
        const temp = t
        t = s
        s = temp
    }

    [...t].forEach(letter => freqMap.set(letter, (freqMap.get(letter) || 0) + 1));

    let i = 0

    while (i < s.length) {
        const char = s[i]
        if (freqMap.has(char) && freqMap.get(char) > 0) {
            freqMap.set(char, freqMap.get(char) - 1)
        } else {
            return false
        }
        i++
    }

    return true
};


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram2 = function (s, t) {
    if (s.length !== t.length) return false;

    const freqMap = new Map();

    // Build frequency map for string `s`
    for (const char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    // Check frequency map against string `t`
    for (const char of t) {
        if (!freqMap.has(char) || freqMap.get(char) === 0) {
            return false;
        }
        freqMap.set(char, freqMap.get(char) - 1);
    }

    return true;
};
