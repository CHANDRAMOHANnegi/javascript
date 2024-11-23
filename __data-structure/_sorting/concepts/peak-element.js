/**
 * @param {number[]} nums
 * @return {number}
 */

var findPeakElement = function (nums) {
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        let mid = Math.floor((left + right) / 2)

        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    return right
};

/****
 * 
 * what if numbers are strictly increasing
 * 
 * we may find peak at last, so we use format of binary search
 * 
 * using these approach we will move toward one of the peak
 * 
 * ***/ 