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
    console.log(left);
    // left will be pointing to the first target

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
    console.log(right);
    // right will be pointing to the last target

    // Check whether right border out of bounds lastly
    if (right < 0 || nums[right] != target)
        return -1;
    return right; // right + 1 // potential insertion point
}


console.log(left_bound([1, 2, 3, 5, 7], 4));
console.log(right_bound([1, 2, 3, 5, 7], 4));


/*****
 * when we find 
 * if(nums[mid] === target){
 * }
 * 
 * then we are moving the pointer,
 * if the next value is not
 * 
 * ****/ 