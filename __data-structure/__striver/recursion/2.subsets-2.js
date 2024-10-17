/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b)
    const final = []
    subs(0, nums, [], final)
    return final
};


var subs = function (idx, nums, ds, final) {

    /*****
     * we are pushing all the combinations
     * **/
    final.push([...ds])

    for (let i = idx; i < nums.length; i++) {
        /*******
         * remove duplicates
         * **/
        if (i != idx && nums[i] === nums[i - 1]) continue
        ds.push(nums[i])
        subs(i + 1, nums, ds, final)
        ds.pop()
    }

}

/******
 * Similar to Combination-2
 * ***/ 