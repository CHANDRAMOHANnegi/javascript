/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function (nums) {
    const res = []
    sets(0, [], res, nums)
    return res
};

var sets = function (idx, dp, res, nums) {
    if (idx === nums.length) {
        res.push([...dp])
        return
    }

    dp.push(nums[idx])
    sets(idx + 1, dp, res, nums)
    dp.pop()
    sets(idx + 1, dp, res, nums)
}