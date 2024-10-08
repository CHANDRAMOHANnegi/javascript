/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const map = new Map()

    let i = 0

    while (i < nums.length) {
        const num = nums[i]
        if (map.has(num))
            return true
        map.set(num, true)
        i++
    }

    return false
};

/*****
 * this is same as 2-sum
 * 
 * 
 * 
 * 
 * 
 * ****/ 