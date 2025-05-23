/**
 * @param {number[]} nums
 * @return {number}
 */

// [10,9,2,5,3,7,101,18]

var lengthOfLIStab = function (nums) {
    if (nums.length === 0) return 0;

    const dp = Array(nums.length).fill(1); // Initialize DP array with 1 (every number is an LIS of length 1)

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1); // Update dp[i] if nums[j] < nums[i]
            }
        }
    }

    /****
     * !
     * 
     * result is not at dp[n],
     * we will have to find max of all dp elements
     * 
     * ***/

    return Math.max(...dp);
};


var lengthOfLISnormal = function (nums) {
    const map = new Map()
    map.set(nums[0], 1)
    let max = 1

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i]
        let newLen = 1
        for (let j = 0; j < i; j++) {
            const prev = nums[j]
            if (prev < num) {
                const prevLen = map.get(prev) || 0
                newLen = Math.max(newLen, prevLen + 1)
            }
        }
        max = Math.max(max, newLen)
        map.set(num, newLen)
    }
    return max
};

var lengthOfLISrec = function (nums, idx, prevIdx) {
    if (idx === nums.length) return 0

    // It tracks the last included element in the subsequence.

    let len = lengthOfLISrec(nums, idx + 1, prevIdx)
    if (prevIdx === -1 || nums[prevIdx] < nums[idx]) {
        const include = lengthOfLISrec(nums, idx + 1, idx)
        len = Math.max(len, include + 1)
    }

    return len
};


var lengthOfLISdp = function (nums, idx, prevIdx, dp) {
    if (idx === nums.length) return 0

    if (dp[idx][prevIdx + 1] != -1)
        return dp[idx][prevIdx + 1]

    let len = lengthOfLISdp(nums, idx + 1, prevIdx, dp)
    if (prevIdx === -1 || nums[prevIdx] < nums[idx]) {
        const include = lengthOfLISdp(nums, idx + 1, idx, dp)
        len = Math.max(len, include + 1)
    }

    return dp[idx][prevIdx + 1] = len
};


var lengthOfLIS = function (nums) {
    // const dp = [...Array(nums.length + 1)]
    //     .fill([...Array(nums.length + 1)].fill(-1))

    // return lengthOfLISnormal(nums)
    // return lengthOfLISrec(nums, 0, -1)
    // return lengthOfLISdp(nums, 0, -1, dp)
    return lengthOfLIStab(nums)
};
