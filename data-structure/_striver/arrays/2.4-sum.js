/**
 * https://leetcode.com/problems/3sum/
 * medium
 * @param {number[]} nums
 * @return {number[][]}
 */

var fourSum = function (nums, target) {
    /***
     *sort the array, this is important
     */
    nums.sort((a, b) => a - b)

    const n = nums.length
    const result = []

    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] != nums[i - 1]) continue

        for (let j = i + 1; j < n - 2; j++) {
            /**
             * very important step
             ***/
            if (j != i + 1 && nums[j] === nums[j - 1]) continue

            let k = j + 1
            let l = nums.length - 1

            while (k < l) {
                const sum = nums[i] + nums[j] + nums[k] + nums[l]

                if (sum === target) {
                    result.push([nums[i], nums[j], nums[k], nums[l]])
                    /**
                     * now to not take dplicates, we skip all duplicate elements, 
                     * */ 
                    while (k < l && nums[k] === nums[k + 1]) {
                        k++
                    }
                    k++
                    while (k < l && nums[l] === nums[l - 1]) {
                        l--
                    }
                    l--
                }

            }

        }

    }

    return result
};



console.log(fourSum([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5], 8));