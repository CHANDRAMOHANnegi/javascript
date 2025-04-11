/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map()

    const sorted = strs.map(str => [...str].sort().join(""))

    sorted.forEach((str, i) => {
        if (map.has(str)) {
            map.get(str).push(strs[i])
        } else {
            map.set(str, [strs[i]])
        }
    })

    return Array.from(map.values())

};