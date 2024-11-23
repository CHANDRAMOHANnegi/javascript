
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const binarySearch = (nums, target, start, end, findFirst) => {
    let resultIndex = -1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (target > nums[mid]) {
            start = mid + 1
        } else if (target < nums[mid]) {
            end = mid - 1
        } else {
            resultIndex = mid
            if (findFirst) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
    }

    return resultIndex
};

var searchRange = function (nums, target) {
    const first = binarySearch(nums, target, 0, nums.length - 1, true)
    const last = binarySearch(nums, target, 0, nums.length - 1, false)
    return [first, last]
};
