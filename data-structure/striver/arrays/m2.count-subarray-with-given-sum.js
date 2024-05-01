/**
 * https://leetcode.com/problems/subarray-sum-equals-k/
 * medium
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**
 * [1, 2, 3, -3, 1, 1, 1, 2, 2, -3]
 **/

var subarraySum = function(nums, k) {
    const n = nums.length
    const map = new Map()
    map.set(0,1)
    let sum = 0;

    let count = 0

    for(let i = 0; i < n; i++ ){
        sum = sum + nums[i]
        const x = sum - k
        /**
         * x is the sum we have to exclude
         * if it occured 2 times, then we add 2 to count
         * because there are 2 more ways we can get target
         * by excluding x
         * this x is from beginning to some index
         */
        if(map.has(x)){
            /**
             * why are we adding map.get(x) to count
             * because
             */
            count += map.get(x)
        }
        if(map.has(sum)){
            /**
             * the sum which we are storing
             * in array is the sum till that index
             */
            map.set(sum,map.get(sum)+1)
        }else{
            map.set(sum,1)
        }
    }
    return count
};