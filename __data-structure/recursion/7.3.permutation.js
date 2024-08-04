
function swap(nums, i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}


function recPermutation(nums, idx, ans) {
    if (idx === nums.length) {
        ans.push([...nums])
        return
    }

    for (let i = idx; i < nums.length; i++) {
        swap(nums, idx, i)
        recPermutation(nums, idx + 1, ans)
        /*******
         * here we are back-tracking, every step we have taken,
         * whatever swaps we have done, all will be undone
         * **/ 
        swap(nums, idx, i)
    }

}

const nums = [1, 2, 3]
const ans = []
recPermutation(nums, 0, ans)
console.log(ans);

/*******
 * 
 * ***/ 