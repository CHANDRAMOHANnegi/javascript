/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function (candidates, target) {
    const final = []
    sets(candidates, 0, target, [], final)
    return final
};

var sets = function (nums, idx, target, result, final) {
    console.log(result,nums[idx]);
    if (idx == nums.length) {
        if (target === 0) {
            final.push([...result])
        }
        return
    }
    /****
     * Choose the current candidate
     * **/

    if (target >= nums[idx]) {
        result.push(nums[idx])
        /****
         * Because repetition  is allowed to we make a call to current index
         * 
         * */
        sets(nums, idx, target - nums[idx], result, final)

        /****
         * so, i was thinking why we din't make a call, as we make in sub-sequence
         * **/
        result.pop()
    }

    /****
     * Skip the current candidate
     * **/
    sets(nums, idx + 1, target, result, final)
}

/******
 * 
 * Here are 2 calls
 * 
 * 1. include current and call to current
 * 2. don't include current and call next
 * 
 * How it is different from subsequence
 * 
 * 1. include current and call to next 
 * 2. don't include current and call next
 * 
 * ****/


/*********
 * The recursion call is this way, so we can get all the combinations
 * 
 * ***/ 

combinationSum([2,3,5],8)