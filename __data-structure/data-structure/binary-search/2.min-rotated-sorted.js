/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function (nums) {

    let low = 0
    let high = nums.length - 1
    let min = nums[0]

    while (low <= high) { // careful
        const mid = Math.floor((low + high) / 2)
        if (nums[mid] < nums[high]) {
            /**
             * if mid is smaller than high, means second half is sorted, 
             * then smaller will lie on the first half including mid 
             * **/
            high = mid
        } else {
            /**
            * if mid is larger high, means first half is sorted, 
            * then smaller will lie on the second half excluding mid 
            * 
            * **/
            low = mid + 1
        }
    }
    return nums[high]// why high gives answer
};




 // if array is sorted rotated, then one half is sorted and other is not
 var findMin = function(nums) {
    let low = 0, high = nums.length - 1

    while(low < high){// why low == high
        const mid = low + Math.floor((high - low)/2)

        if(nums[mid] < nums[high]){
            /***
             * if(nums[low] < nums[mid])
             * 
             * we cannot use this check to
             * 
             * 
             * **/ 
            high = mid
        }else{
            low = mid + 1
        }
    }

    return nums[low]
};

// [7,8,1,2,3,4,5,6]// pivot on left
// [1,2,3,4,5,6,7,8]
// [3,4,5,6,7,8,1,2]// pivot on right

// pivot will lie in unsorted area
