/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function (nums) {

    let low = 0
    let high = nums.length - 1
    let min = nums[0]

    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        if (nums[mid] < nums[high]) {
            /**
             * if mid is smaller than high, means second half is sorted, then smaller will lie on the first half including mid 
             * **/ 
            high = mid
        } else {
             /**
             * if mid is larger high, means first half is sorted, then smaller will lie on the second half excluding mid 
             * 
             * **/ 
            low = mid + 1
        }
    }
    return nums[high]
};