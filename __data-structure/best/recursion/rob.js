const robRec = (nums, n) => {
    if (n < 0) return 0

    const result = Math.max(robRec(nums, n - 2) + nums[n], robRec(nums, n - 1))

    return result
}

var rob = function (nums) {
    return robRec(nums, nums.length - 1)
    // return robDP(nums)
};