/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function (nums) {
    let low = 0
    let high = nums.length - 1
    let min = nums[low]

    while (low < high) {
        const mid = Math.floor((low + high) / 2)
        if (nums[mid] < nums[high]) {
            high = mid
        } else {
            low = mid + 1
        }
    }
    return nums[low]
};


/******
 * we will find mid, 
 * and depending on that mid we can find in which direction array is rotated
 * and then we can update low and high
 * 
 * once half of array is sorted in rotated array
 * 
 * ****/ 

/***
 * what was i doing wrong
 * i was using simple traverse
 * ****/ 