const nums = [5, 2, 3, 4, 1, 6]

const sort = (nums, idx) => {
    if (idx === nums.length - 1) {
        return idx
    }

    let maxIdx = idx
    for (let i = idx; i < nums.length; i++) {
        if (nums[i] > nums[maxIdx]) {
            maxIdx = i
        }
    }
    
    const temp = nums[maxIdx]
    nums[maxIdx] = nums[idx]
    nums[idx] = temp

    sort(nums, idx + 1)
}

sort(nums, 0)
console.log(nums)

