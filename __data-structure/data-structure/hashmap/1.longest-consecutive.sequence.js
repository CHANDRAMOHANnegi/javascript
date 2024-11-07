/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function (nums) {
    const set = new Set()
    nums.forEach(num => set.add(num))

    let maxLen = 0

    set.forEach((value) => {
        let i = 1
        /****
         * if its previous value exist, then it is not starting point, an we skip it
         * if its previous value do not exist then this is starting point
         * ****/ 
        if (!set.has(value - 1)) {
            while (set.has(value + i)) {
                i++
            }
            if (i > maxLen) {
                maxLen = i
            }
        }
    })

    return maxLen
};