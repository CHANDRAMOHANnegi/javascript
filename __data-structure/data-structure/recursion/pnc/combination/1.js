/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */


var combinationSum = function (candidates, target) {
    const helper = (nums, target, idx, final, curr) => {
        if (target === 0) {
            final.push([...curr])
            return
        }
        if (idx === nums.length || target < 0) {
            return
        }

        if (target - nums[idx] >= 0) {
            // include
            /****
             * 
             * here i was using "idx + 1", but we are making combination,
             * we can repeat
             * 
             * "push to array and pop" is better 
             * 
             * **/
            curr.push(nums[idx])
            helper(nums, target - nums[idx], idx, final, curr)
            curr.pop()
        }

        // exclude
        helper(nums, target, idx + 1, final, curr)
    }

    const final = []
    helper(candidates, target, 0, final, [])
    // console.log(final)
    return final
};