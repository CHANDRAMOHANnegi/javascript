/**
 * @param {number[]} nums
 * @return {number}
 */

// [3, 6] , [2, 4]
// 

const merge = (nums, low, mid, high) => {
    const final = [];

    let left = low;
    let right = mid + 1;

    let reversePairs = 0;
    let j = mid + 1
    // [3, 6] , [2, 4]
    for (let i = low; i <= mid; i++) {
        while (j <= high && nums[i] > 2 * nums[j]) {
            j++
        }
        reversePairs += j - (mid + 1)
    }

    while (left <= mid && right <= high) {
        if (nums[left] <= nums[right]) {
            final.push(nums[left]);
            left++;
        } else {
            final.push(nums[right]);
            right++;
        }
    }

    while (left <= mid) {
        final.push(nums[left]);
        left++;
    }

    while (right <= high) {
        final.push(nums[right]);
        right++;
    }

    for (let i = 0; i < final.length; i++) {
        nums[low + i] = final[i];
    }

    return reversePairs;
};

const merge_sort = (nums, low = 0, high = nums.length - 1) => {
    if (low >= high) return 0;
    const mid = Math.floor((low + high) / 2);

    let reversePairs = 0;
    reversePairs += merge_sort(nums, low, mid);
    reversePairs += merge_sort(nums, mid + 1, high);

    reversePairs += merge(nums, low, mid, high);

    return reversePairs;
};

var reversePairs = function (nums) {
    return merge_sort(nums)
};



// Reverse Pairs
// while (j <= high && nums[i] > 2 * nums[j]) {

//   Inversions  
// while (j <= high && nums[i] > nums[j]) {