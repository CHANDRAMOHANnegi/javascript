/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var reverse = function (nums, start, end) {
    for (let i = 0; i < Math.ceil((end - start) / 2); i++) {
        let temp = nums[start + i]
        nums[start + i] = nums[end - i]
        nums[end - i] = temp
    }
};

var rotateReverse = function (nums, k) {
    const n = nums.length

    reverse(nums, 0, n - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, n - 1)
};

var rotate = function (nums, k) {
    let l = k
    if (l > nums.length) {
        l = Math.ceil(l % nums.length)
    }

    rotateReverse(nums, l)
};

// 1 2 3 4 5 6 7

// reverse(0, n - 1)
// 7 6 5 4 3 2 1

// reverse(0, k - 1)
// 5 6 7 4 3 2 1

// reverse(k, n - 1)
// 5 6 7 1 2 3 4

// result
// 5 6 7 1 2 3 4