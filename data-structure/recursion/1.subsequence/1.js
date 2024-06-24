/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var sets = function (nums, i, res, results) {
    if (i === nums.length) {
        /*****
         * [...res] to create copy, else reference will be there 
         * which will create trouble
         * 
         * WHY do we need spread the `res` and give new COPY
         * 
         * To avoid modifying the subsets that have already been added to results. 
         * 
         * 
         * In JavaScript, objects (including arrays) are assigned and passed by reference. 
         * This means that res is not copied; instead, a reference to res is stored in results.
         * */
        results.push([...res])
        // results.push(res)
        return
    }

    res.push(nums[i])
    sets(nums, i + 1, res, results)
    res.pop()
    sets(nums, i + 1, res, results)
}

var subsets = function (nums) {
    const results = []
    const res = []
    sets(nums, 0, res, results)
    return results
};

