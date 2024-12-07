/**
 * @param {number[]} nums
 * @return {number[][]}
 * https://www.youtube.com/watch?v=QKkHCS5bq0I&list=PL-Jc9J83PIiHO9SQ6lxGuDsZNt2mkHEn0&index=20
 */

var permute = function (nums) {
    const helper = (nums, idx, result, box) => {
        if (idx === nums.length) {
            result.push([...box])
            return
        }

        for (let i = 0; i < box.length; i++) {
            /****
             * 
             * nums[idx] ke pass choices hai ki vo kon se box me jaye
             * 
             * ***/
            if (box[i] === false) {
                box[i] = nums[idx]
                helper(nums, idx + 1, result, box)
                box[i] = false
            }
        }
    }

    const result = []
    const box = Array(nums.length).fill(false)
    helper(nums, 0, result, box)

    return result
};

/****
 * https://www.youtube.com/watch?v=QKkHCS5bq0I&list=PL-Jc9J83PIiHO9SQ6lxGuDsZNt2mkHEn0&index=20
 * 
 * boxes options hai
 * 
 * permutations me 
 * 
 * levels par items
 * and 
 * options me boxes
 * 
 * 
 * ***/ 