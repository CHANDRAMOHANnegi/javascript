/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
    const helper = (nums, idx, result, box) => {
        if (idx === nums.length) {
            result.push([...box])
            return
        }

        for (let i = 0; i < box.length; i++) {
            if (box[i] !== false) continue;
            box[i] = nums[idx]
            helper(nums, idx + 1, result, box)
            box[i] = false
        }
    }

    const result = []
    const box = Array(nums.length).fill(false)
    helper(nums, 0, result, box)

    return result
};

/****
 * 
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