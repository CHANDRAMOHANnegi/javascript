/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var minWindow = function (s, t) {
    const freqMap = new Map();

    [...t].forEach(letter => freqMap.set(letter, (freqMap.get(letter) || 0) + 1));

    const windowFreqMap = new Map()
    const n = t.length

    let left = 0, right = 0
    let count = 0

    let min = Infinity
    let minStr = ""

    while (right < s.length) {
        if (count < n) {
            const charR = s[right]
            if (freqMap.has(charR)) {
                windowFreqMap.set(charR, (windowFreqMap.get(charR) || 0) + 1)
                if (windowFreqMap.get(charR) <= freqMap.get(charR)) {
                    count++
                }
            }
            right++
        }

        while (count === n) {
            let winLength = right - left
            if (winLength < min) {
                min = winLength
                minStr = s.slice(left, right)
            }
            const charL = s[left]
            if (windowFreqMap.has(charL)) {
                windowFreqMap.set(charL, windowFreqMap.get(charL) - 1)
                if (windowFreqMap.get(charL) < freqMap.get(charL)) {
                    count--
                }
            }
            left++
        }

    }

    return minStr
};