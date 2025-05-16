/**
 * @param {number[]} nums
 * @return {boolean}
 */

// [2,3,1,1,4]
// [,true]

const helper = (nums, idx) => {
    if (idx >= nums.length) return false
    if (idx === nums.length - 1) {
        return true
    }

    for (let jump = 1; jump <= nums[idx]; jump++) {
        if (helper(nums, idx + jump)) {
            return true
        }
    }

    return false
}

const helperDP = (nums, idx, dp) => {
    if (idx >= nums.length) return dp[idx] = false
    if (idx === nums.length - 1) {
        return dp[idx] = true
    }

    if (dp[idx] !== undefined) return dp[idx]

    for (let jump = 1; jump <= nums[idx]; jump++) {
        if (helperDP(nums, idx + jump, dp)) {
            return dp[idx + jump] = true
        }
    }

    return dp[idx] = false
}

const helperTAB = (nums) => {
    const dp = Array.from({ length: nums.length + 1 })
    dp[nums.length - 1] = true

    for (let i = nums.length - 2; i >= 0; i--) {
        for (let j = 1; j <= nums[i]; j++) {
            if (dp[i + j] === true) {
                dp[i] = true
                break
            }
            if (i + j >= nums.length) break
        }
    }

    return !!dp[0]
}


const helperOptimal = (nums)=>{
    let farthest = 0

    for(let i = 0; i < nums.length; i++){
        if(i > farthest)return false // we were not able to reach at this point
        farthest = Math.max(farthest , i + nums[i])
    }
    return true
}




var canJump = function (nums) {
    // return helper(nums,0)

    // const dp = Array.from({length:nums.length + 1})
    // return helperDP(nums,0,dp)

    // return helperTAB(nums)

    return helperOptimal(nums)

};