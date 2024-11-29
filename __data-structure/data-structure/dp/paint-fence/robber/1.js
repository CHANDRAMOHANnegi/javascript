/**
 * @param {number[]} nums
 * @return {number}
 */

const robDP = ()=>{
    let include = nums[0]
    let exclude = 0

    for(let i = 1; i < nums.length; i++){
        const preInclude = include
        include = exclude + nums[i]
        exclude = Math.max(preInclude,exclude)
    }

    return Math.max(include,exclude)
}

const robRec = (nums,n)=>{
    if(n < 0) return 0

    const result = Math.max(robRec(nums, n - 2) + nums[n], robRec(nums,n-1))

    return result
}

var rob = function(nums) {
    return robRec(nums,nums.length-1)
    // return robDP(nums)
};