/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// freq map for char of t
// curr map to keep track of char in window
// requiredFreqCount
// currentFreqCount

var minWindow = function (s, t) {

    let left = 0
    let right = 0

    let minIndex = Infinity
    let startIndex = 0

    let freqMap = new Map();
    [...t].forEach(ch => freqMap.set(ch, (freqMap.get(ch) ?? 0) + 1))
    let requiredCount = freqMap.size

    const currMap = new Map()
    let currCount = 0

    while (right < s.length) {
        const ch = s[right]
        currMap.set(ch, (currMap.get(ch) ?? 0) + 1)


        // yaha add karte raho jab tak frequency and count equal nahi ho jata
        // yaha string ko badha rahe hai, jab tak sare count and frequency required tak nahi aa jati
        if (freqMap.has(ch) && freqMap.get(ch) === currMap.get(ch)) {
            currCount++
        }

        while (requiredCount === currCount) {
            if (right - left + 1 < minIndex) {
                startIndex = left
                minIndex = right - left + 1
            }

            const leftChar = s[left]
            currMap.set(leftChar, currMap.get(leftChar) - 1)

            // yaha remove karte raho jab tak frequency and count equal hai
            // string ko chhota karte raho
            if (freqMap.has(leftChar) && currMap.get(leftChar) < freqMap.get(leftChar)) {
                currCount--
            }
            left++
        }
        right++
    }

    return minIndex === Infinity ? "" : s.substring(startIndex, startIndex + minIndex)
};
