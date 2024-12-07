
function recPermutation(nums, ds, ans, freq) {
    if (ds.length === nums.length) {
        ans.push([...ds])
        return
    }

    for (let i = 0; i < nums.length; i++) {
        if (!freq[i]) {
            freq[i] = true
            ds.push(nums[i])
            recPermutation(nums, ds, ans, freq)
            ds.pop()
            freq[i] = false
        }

    }

}

const nums = [1, 2, 3]
const ans = []
const freq = []
recPermutation(nums, [], ans, freq)
console.log(ans);

/*******
 * 
 * ***/ 