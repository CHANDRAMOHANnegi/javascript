const robRec = (nums, n) => {
    if (n < 0) return 0

    const result = Math.max(robRec(nums, n - 2) + nums[n], robRec(nums, n - 1))

    return result
}


const robDP2 = (nums, n, dp) => {
    if (n < 0) return 0

    /******
     * 
     * dp[n] != false
     * 
     * if dp[n] == 0
     * 
     * this condition works, truthy falsy issue
     * 
     * use "===" always
     * 
     * use === PLEASE
     * 
     * 0 == false // true
     * 
     * ***/
    if (dp[n] !== false) {
        return dp[n]
    }

    return dp[n] = Math.max(robDP2(nums, n - 2, dp) + nums[n], robDP2(nums, n - 1, dp))
}

const robDP = (houses) => {
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
    // return robDP(nums)
};