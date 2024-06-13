/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */

var numSubarraysWithSum = function (nums, goal) {

    const n = nums.length
    let left = 0, right = 0

    let no = 0
    let sum = 0

    let bool = false
    let prefixZeros = 0

    while (right < n) {
        sum += nums[right]

        /**
         * we will count prefix zeros
         * 
         * */ 

        while (left < right & (nums[left] ==0 || sum > goal)) {
            if(nums[left] == 1){
                prefixZeros = 0
            }else{
                prefixZeros += 1
            }
            sum -= nums[left]
            left++
        }
        /****
         * Here we are counting zeros
         * and adding it to count
         * we added 1 for the actual `str` till sum is equal to goal 
         * */ 
        if (sum == goal) {
            no += 1 + prefixZeros;
        }
        right++
    }

    return no
};