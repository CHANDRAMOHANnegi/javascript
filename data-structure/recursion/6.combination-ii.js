/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=>a - b)
    const ans = []
    const ds = []
    findCombination(0, target, candidates, ans, ds)
    return ans
};


function findCombination(idx, target, arr, ans, ds){
    if(target === 0){
        ans.push([...ds])
        return
    }

    for(let i = idx; i < arr.length; i++){
        if(i > idx && arr[i] === arr[i-1]) continue;
        if(arr[i] > target) break;
        ds.push(arr[i])
        findCombination(i + 1, target - arr[i], arr, ans, ds)
        ds.pop()
    }
}