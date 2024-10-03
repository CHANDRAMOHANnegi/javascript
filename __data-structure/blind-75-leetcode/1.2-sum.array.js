/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    const map = new Map()

    /****
     * !un-necessary for loop
     * 
     * we can do this with single for loop
     * 
     * ****/ 

    nums.forEach((num, i) => map.set(num, i))

    const res = []
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const idx = map.get(num)
        if (map.has(target - num) && i != map.get(target - num)) {
            res = [map.get(target - num), i]
            break
        }
    }
    return res
};

/********
 * What was i doing wrong here
 * 
 * 
 * 
 * *******/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSumOptimal = function (nums, target) {
    const n = nums.length;
    const map = new Map()

    for (let i = 0; i < n; i++) {
        const num = nums[i]
        if (map.has(target - num)) {
            return [i, map.get(target - num)]
        }
        map.set(num, i);
    }
    return [-1, -1]
};