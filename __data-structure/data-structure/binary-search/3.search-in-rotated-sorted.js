/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let low = 0
    let high = nums.length - 1

    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] >= nums[high]) {// first half is sorted
            if (target >= nums[low] && target < nums[mid]) {// these checks are to check if the target lies in sorted half
                high = mid - 1
            } else {
                low = mid + 1
            }
        } else {// second half is sorted
            if (target > nums[mid] && target <= nums[high]) {// these checks are to check if the target lies in sorted half
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
    }

    return -1
};
// In a rotated sorted array, one half is sorted, and the other half contains the rotation. 
// You need to figure out which half is sorted and then decide whether the target lies in that half.

/*****
 * 
 * step 1 : figure out which half is sorted // outer if-else
 * 
 * step 2 : then apply checks to search in for the sorted half // inner if-else
 * 
 * ***/ 