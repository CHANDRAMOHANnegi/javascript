const merge = (nums, low, mid, high) => {
    const final = []

    let left = low
    let right = mid + 1

    while (left <= mid && right <= high) {
        if (nums[left] < nums[right]) {
            final.push(nums[left])
            left++
        } else {
            final.push(nums[right])
            right++
        }
    }

    while (left <= mid) {
        final.push(nums[left])
        left++
    }
    while (right <= high) {
        final.push(nums[right])
        right++
    }

    for (let i = 0; i < final.length; i++) {
        nums[low + i] = final[i]
    }

}

const merge_sort = (nums, low = 0, high = nums.length - 1) => {
    if (low >= high) return
    const mid = Math.floor((low + high) / 2)

    merge_sort(nums, low, mid)
    merge_sort(nums, mid + 1, high)

    merge(nums, low, mid, high)
}

const nums = [1, 3, 2, 4, 5];
merge_sort(nums)
console.log(nums);

