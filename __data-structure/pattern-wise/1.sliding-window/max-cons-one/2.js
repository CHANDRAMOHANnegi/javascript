/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var longestOnes = function(nums, k) {
    const n = nums.length

    let left = 0
    let right = 0

    let maxLen = 0
    let zeroes = 0

    /***
     * Outer loop is for window expansion
     * Inner loop is for Window shrinking
     * **/ 

    while(right < n){
        if(nums[right] == 0){
            zeroes++
        }

        /***
         * This inner loop is very important
         * yaha max zeroes sif k hi allowed hai
         * this loop helps us to maintain that
         * 
         * Inner loop is For Shrinking
         * */ 

        while(zeroes > k){
            if(nums[left] == 0){
                zeroes--
            }
            left++
        }

        /****
         * 
         * only calculate length when zeroes is "0"
         * 
         * if zeroes is -ve, increase left
         * 
         * ***/ 

        maxLen = Math.max(maxLen, right - left + 1)
        right++
    }

    return maxLen
};