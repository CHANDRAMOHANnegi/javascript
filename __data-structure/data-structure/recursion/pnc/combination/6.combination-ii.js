/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=>a - b)
    const ans = []
    findCombination(0, target, candidates, ans, [])
    return ans
};


function findCombination2(idx, target, arr, ans, ds){
    if(target === 0){
        ans.push([...ds])
        return
    }

    for(let i = idx; i < arr.length; i++){
        if(i > idx && arr[i] === arr[i-1]) continue;
        if(arr[i] > target) break;
        ds.push(arr[i])
        findCombination2(i + 1, target - arr[i], arr, ans, ds)
        ds.pop()
    }
}


var findCombination = function(idx,target,nums,ds,final){
    if(target === 0){
        final.push([...ds])
        return
    }

    ds.push(nums[idx])
    findCombination(idx + 1,target - nums[idx],nums,ds,final)
    ds.pop()
    while(idx+1 < nums.length && nums[idx] === nums[idx + 1]) idx++
    findCombination(idx + 1,target,nums,ds,final)
}
