/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const swap = (nums, i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]]
}

var sortColors = function (nums) {
    let zeroes = 0
    let twos = nums.length - 1
    let pointer = 0

    while (pointer <= twos) {
        if (nums[pointer] === 0) {
            swap(nums, pointer, zeroes)
            zeroes++
            pointer++
        } else if (nums[pointer] === 2) {
            swap(nums, pointer, twos)
            twos--
            // here we are not increasing pointer
            // because the number we got here, what if that number is again 2,
        } else {
            pointer++
        }
    }
    return nums
};