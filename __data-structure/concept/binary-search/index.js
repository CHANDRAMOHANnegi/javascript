const binary_search = (nums, target, left = 0, right = nums.length - 1) => {
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] == target) {
            // Return directly
            return mid;
        }
    }
    // Return directly
    return -1;
}

const left_bound = (nums, target, left = 0, right = nums.length - 1) => {
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] == target) {
            // Don't return! Lock left border
            right = mid - 1;
        }
    }
    // Check whether left border out of bounds lastly
    if (left >= nums.length || nums[left] != target)
        return -1;
    return left;
}

const right_bound = (nums, target, left = 0, right = nums.length - 1) => {
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] == target) {
            // Don't return! Lock right border
            left = mid + 1;
        }
    }
    // Check whether right border out of bounds lastly
    if (right < 0 || nums[right] != target)
        return -1;
    return right;
}

console.log(left_bound([1, 2, 3, 5, 7], 8));
console.log(right_bound([1, 2, 3, 5, 7], 8));


const arr = [2, 3, 4, 10, 40];
const target = 0;
const start = 1;
const end = 4;

const result = binarySearch(arr, target, start, end);
console.log(result);

if (result == -1) {
    console.log("Element not found");
} else {
    console.log("Element found at index " + result);
}