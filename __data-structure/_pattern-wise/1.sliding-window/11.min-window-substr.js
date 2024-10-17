/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var minWindow = function (s, t) {
    const map = new Map()

    for (const char of t) {
        map.set(char, (map.get(char) || 0) + 1)
    }

    let left = 0
    let right = 0
    let count = 0
    let minLen = s.length
    let minIndex = -1

    while (right < s.length) {
        if (map.get(s[r]) > 0) count++
        map.get(s[r])--;

        while (count === t.length) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1
                sIndex = left
            }
            map.set(map.get(s[l]), map.get(s[l]) - 1)
            if (map.get(s[l]) > 0) count--
        }
        if (count < t.length) {
            if (map.has(char)) {
                map.set(char, (map.get(char) || 0) - 1)
            }
        }
    }

};