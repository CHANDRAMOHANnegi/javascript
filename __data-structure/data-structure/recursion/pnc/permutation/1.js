/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// idx is level

var permute = function (nums) {
    const helper = (nums, level, result, curr) => {
        if (level === nums.length) {
            result.push([...curr])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (curr.includes(nums[i])) continue;
            curr.push(nums[i])
            helper(nums, level + 1, result, curr)
            curr.pop()
        }
    }

    const result = []
    helper(nums, 0, result, [])

    return result
};