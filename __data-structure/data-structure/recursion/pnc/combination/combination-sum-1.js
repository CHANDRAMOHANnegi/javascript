/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    // candidates.sort((a, b) => a - b)
    const final = []
    findCombination2(0, target, candidates, [], final)
    return final
};

function findCombination(idx, target, arr, ds, final,) {
    if (target === 0) {
        final.push([...ds])
        return
    }

    if (target < 0 || idx >= nums.length) return

    for (let i = idx; i < arr.length; i++) {
        // if (i > idx && arr[i] === arr[i - 1]) continue;
        // below condition can be used when sorted 
        // if (arr[i] > target) continue;
        // "continue" works because array is not sorted, if we sort array then "break" would work
        ds.push(arr[i])
        findCombination(i, target - arr[i], arr, ds, final)
        ds.pop()
    }
}

var findCombination2 = function (idx, target, nums, ds, final) {
    if (target === 0) {
        final.push([...ds])
        return
    }
    if (target < 0 || idx >= nums.length) return

    ds.push(nums[idx])
    /*****
     * use current number and move ahead since repetition is not allowed
     * ***/
    findCombination2(idx, target - nums[idx], nums, ds, final)
    ds.pop()
    // while (idx + 1 < nums.length && nums[idx] === nums[idx + 1]) idx++
    findCombination2(idx + 1, target, nums, ds, final)
}
