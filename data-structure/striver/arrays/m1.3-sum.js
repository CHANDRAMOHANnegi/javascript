/**
 * https://leetcode.com/problems/3sum/
 * medium
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
    let i = 0
    /***
     *sort the array, this is important
     */
    nums.sort((a, b) => a - b)
    const result = []

    while (i < nums.length - 2) {
        /****
         * is current num is same as last num then continue,
         * otherwise will give duplicate
         */

        if (i > 0 && (nums[i] === nums[i - 1])) {
            i++
            continue
        }
        let j = i + 1
        let k = nums.length - 1
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k]
            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]])
                while (j < k && nums[j] === nums[j + 1]) {
                    j++
                }
                while (j < k && nums[k] === nums[k - 1]) {
                    k--
                }
                j++
                k--
            } else if (sum > 0) {
                k--
            } else {
                j++
            }
        }
        i++
    }
    return result
};



console.log(threeSum([-2, -2, -2, -1, -1, -1, 0, 0, 0, 2, 2, 2, 2]));