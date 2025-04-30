
const rec = (nums, target, n) => {
    if (n === nums.length) {
        if (target === 0) {
            return 1
        }
        return 0
    }

    const plus = rec(nums, target + nums[n], n + 1) // no of ways to get (target + nums[n]) using nums, from index n + 1
    const minus = rec(nums, target - nums[n], n + 1)// no of ways to get (target - nums[n]) using nums, from index n + 1

    return plus + minus
}

/****
 * we need to use 2d DP,
 * 
 * dp[n][currTarget] // no of ways to form currTarget using first n numbers
 * 
 * 
 * ***/
const recDpWrong = (nums, target, n, dp) => {
    if (n === nums.length) {
        if (target === 0) {
            return 1
        }
        return 0
    }
    if (dp[n] !== 0) return dp[n]

    const plus = recDpWrong(nums, target + nums[n], n + 1, dp)
    const minus = recDpWrong(nums, target - nums[n], n + 1, dp)

    return dp[n] = plus + minus
}


const OFFSET = 2000

const recDP = (nums, currTarget, n, dp) => {
    // console.log(n,currTarget)
    if (n === nums.length) {
        if (currTarget === 0) {
            return 1
        }
        return 0
    }

    if (dp[n][currTarget + OFFSET] !== undefined) return dp[n][currTarget + OFFSET]

    const plus = recDP(nums, currTarget + nums[n], n + 1, dp)
    const minus = recDP(nums, currTarget - nums[n], n + 1, dp)

    return dp[n][currTarget + OFFSET] = plus + minus
}

const recTAB = (nums, target) => {
    const totalSum = nums.reduce((all, num) => all + num, 0)
    if (Math.abs(totalSum) < Math.abs(target)) return 0
    const OFFSET = totalSum
    const dp = Array.from({ length: nums.length + 1 }, () => Array.from({ length: 2 * totalSum + 1 }, () => 0))
    dp[0][OFFSET] = 1

    for (let n = 1; n <= nums.length; n++) {
        for (let currTarget = -totalSum; currTarget <= totalSum; currTarget++) {
            const adjustedTarget = currTarget + OFFSET
            if (adjustedTarget - nums[n - 1] >= 0) {
                dp[n][adjustedTarget] += dp[n - 1][adjustedTarget - nums[n - 1]]
            }
            if (adjustedTarget + nums[n - 1] < 2 * OFFSET + 1) {
                dp[n][adjustedTarget] += dp[n - 1][adjustedTarget + nums[n - 1]]
            }
        }
    }

    return dp[nums.length][target + OFFSET]
}



var findTargetSumWays = function (nums, target) {
    // return rec(nums,target,0)

    const dp = Array.from({ length: nums.length }, () => Array.from({ length: target + 2 * OFFSET + 1 }))
    const res = recDP(nums, target, 0, dp)

    return res
};

// [1,1,1,1,1],

// dp[n][currTarget] // no of ways to form currTarget using first n numbers


// rec(nums,target,0)
// rec(nums,target,n)
// gives no ways, to form target, using nums, from n


/****
 * 
 * THIS is target sum, not target sum subset
 * so we need all elements to form the target
 * 
 * 
 * **/ 