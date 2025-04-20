/**
 * @param {number[]} nums
 * @return {number}
 */

var findPeakElement = function (nums) {
    let left = 0, right = nums.length - 1
    while (left <= right) { // left = right + 1
        const mid = left + Math.floor((right - left) / 2)
        if (nums[mid] > (nums[mid + 1] ?? -Infinity) && nums[mid] > (nums[mid - 1] ?? -Infinity)) {
            // very important
            return mid
        } else if (nums[mid] < nums[mid + 1]) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return left
};


var findPeakElement = function (nums) {
    let left = 0, right = nums.length - 1
    while (left < right) { // left = right 
        /****
         * we break here, because left and right are equal,
         * and there is no point in going anywhere
         * 
         * Th main point is, we just need ONE answer, 
         * so we always include a greater number in out range
         * **/
        const mid = left + Math.floor((right - left) / 2)
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return left
};

