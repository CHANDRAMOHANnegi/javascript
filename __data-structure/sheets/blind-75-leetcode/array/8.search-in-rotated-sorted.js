/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        // If target is found at mid
        if (nums[mid] === target) {
            return mid;
        }

        // Check if the left half is sorted
        if (nums[low] <= nums[mid]) {
            // Target lies within the left sorted portion
            if (nums[low] <= target && target < nums[mid]) {// these checks are to check if the target lies in sorted half
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        // Else the right half is sorted
        else {
            // Target lies within the right sorted portion
            if (nums[mid] < target && target <= nums[high]) {// these checks are to check if the target lies in sorted half
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    // Target not found
    return -1;
};

/*******
 * !In a rotated sorted array, one half is sorted, 
 * In a rotated sorted array, one half is sorted, and the other half contains the rotation. 
 * You need to figure out which half is sorted and then decide whether the target lies in that half.
 * ******/
