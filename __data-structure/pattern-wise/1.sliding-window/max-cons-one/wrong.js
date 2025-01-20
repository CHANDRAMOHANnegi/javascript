/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxConsecutiveOnes = function (nums) {
    let max = 0

    let left = 0
    let right = 0

    while (right < nums.length) {
        /*****
         * 
         * yaha me keh raha hu ki agar 1 nahi hai to length calculate karunga
         * 
         * lekin agar sare hi 1 aa gaye to length calculate hogi hi nahi
         * 
         * if laga rahe ho to else ko bhi dekho
         * 
         * ***/
        if (nums[right] != 1) {
            max = Math.max(max, right - left)
            left = right = right + 1
        }
        right++
    }

    return max
};