/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
    const freqMap = new Map();
    [...s].forEach(ch => freqMap.set(ch, (freqMap.get(ch) ?? 0) + 1))

    let i = 0

    while (i < t.length) {
        const ch = t[i]
        if (freqMap.has(ch) && freqMap.get(ch) >= 0) {
            freqMap.set(ch, freqMap.get(ch) - 1)
            if (freqMap.get(ch) <= 0) freqMap.delete(ch)

        } else {
            return false
        }
        i++
    }
    if (freqMap.size) return false

    return true
};