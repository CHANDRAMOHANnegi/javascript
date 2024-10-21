/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function(nums) {

    let xor = 0
    let n = nums.length

    nums.forEach(num=> xor = xor ^ num)

    while(n > 0){
        xor = xor ^ n
        n--
    }

    return xor
};