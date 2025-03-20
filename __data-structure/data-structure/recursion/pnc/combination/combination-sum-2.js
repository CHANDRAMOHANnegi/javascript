/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b)
    const final = []
    findCombination(0, target, candidates, [], final)
    return final
};

function findCombination2(idx, target, arr, ds, final,) {
    if (target === 0) {
        final.push([...ds])
        return
    }
    if (target < 0 || idx >= arr.length) return

    for (let i = idx; i < arr.length; i++) {
        if (i > idx && arr[i] === arr[i - 1]) continue;
        // below proactive check is working because of sorted array
        // if (arr[i] > target) break;
        ds.push(arr[i])
        findCombination2(i + 1, target - arr[i], arr, ds, final)
        ds.pop()
    }
}

var findCombination = function (idx, target, nums, ds, final) {
    console.log(idx,target,ds)
    if (target === 0) {
        final.push([...ds])
        return
    }
    if (target < 0 || idx >= nums.length) return

    ds.push(nums[idx])
    /*****
     * use current number and move ahead since repetition is not allowed
     * ***/
    findCombination(idx + 1, target - nums[idx], nums, ds, final) // call 1
    ds.pop()
    while (idx + 1 < nums.length && nums[idx] === nums[idx + 1]) idx++
    findCombination(idx + 1, target, nums, ds, final) // call 2
}

/****
 * how it removes Duplicity
 * 
 * we are making call2 from same point as call1,
 * 
 * if we have already included the number in call1
 * why to include that number again in call2, so we skip it using that while loop
 * 
 * */ 

combinationSum2([1,2,2,5],5)