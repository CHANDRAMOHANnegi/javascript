const robRec = (nums, n) => {
    if (n < 0) return 0

    // [rob1, rob2, n, n + 1, n + 2, n + 3, ...]
    // rob(n) = Math.min(rob1 + n, rob2)
    const result = Math.max(robRec(nums, n - 2) + nums[n], robRec(nums, n - 1))

    return result
}


const robDP2 = (nums, n, dp) => {
    if (n < 0) return 0

    /******
     * 
     * dp[n] != false
     * if dp[n] == 0
     * this condition works, truthy falsy issue
     * use "===" always
     * use "===" PLEASE
     * 0 == false // true
     * ***/

    if(dp[n] !== false){
        return dp[n]
    }

    // [secLast, last, |n| , n + 1, n + 2, n + 3, ...]
    // rob(n) = Math.min(secLast + n, last)

    const secLast = robDp(nums, n - 2, dp)
    const last = robDp(nums, n - 1, dp)

    return dp[n] = Math.max(secLast + nums[n], last)
}
 
const robTab = (houses) => {
    let include = houses[0]
    let exclude = 0

    for (let house = 1; house < houses.length; house++) {
        const lastInclude = include
        include = exclude + houses[house]
        /****
         * exclude = lastInclude
         * i did this, but what if exclude is greater than lastInclude
         * ***/
        exclude = Math.max(exclude, lastInclude)
    }

    return Math.max(include, exclude)
}



var rob = function (nums) {
    return robRec(nums, nums.length - 1)
    // return robTab(nums)
};