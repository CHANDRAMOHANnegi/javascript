/**
 * @param {number[]} nums
 * @return {number}
 */

const robRec = (nums,n,noincludeFirst)=>{
    if(n < 0){
        return 0
    }

    if(n === 0){
        if(noincludeFirst){
            return 0
        }
    }

    const last = robRec(nums,n - 1,noincludeFirst)
    const secLast = robRec(nums,n - 2,noincludeFirst)
    
    return Math.max(secLast + nums[n], last)
}

const robDp = (nums,n,noincludeFirst,dp)=>{
    if(n < 0){
        return  0
    }

    if(n === 0){
        if(noincludeFirst){
            return  0
        }
    }

    if(n > 1 && n < nums.length - 2 && dp[n] !== false) return dp[n]

    const last = robDp(nums, n - 1, noincludeFirst,dp)
    const secLast = robDp(nums, n - 2, noincludeFirst,dp)
    
    return dp[n] = Math.max(secLast + nums[n], last)
}

var rob = function(nums) {
    if(nums.length === 1)return nums[0]

    // return Math.max(robRec(nums,nums.length - 1,true),robRec(nums,nums.length - 2,false))

    
    let dp = Array.from({length:nums.length + 1},()=>false)
    const include = robDp(nums,nums.length - 1,true,dp)
    dp = Array.from({length:nums.length + 1},()=>false)
    const exclude = robDp(nums,nums.length - 2,false,dp)
    return Math.max(include,exclude)

};