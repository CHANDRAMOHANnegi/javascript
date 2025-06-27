const merge = (nums, low, mid, high) => {
    const final = []

    let left = low
    let right = mid + 1

    let inversions = 0

    while (left <= mid && right <= high) {
        if (nums[left] < nums[right]) {
            final.push(nums[left])
            left++
        } else {
            final.push(nums[right])
            inversions += mid - left + 1
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

    return inversions
}

const merge_sort = (nums, low = 0, high = nums.length - 1) => {
    if (low >= high) return 0
    const mid = Math.floor((low + high) / 2)

    let inversions = 0
    inversions += merge_sort(nums, low, mid)
    inversions += merge_sort(nums, mid + 1, high)

    inversions += merge(nums, low, mid, high)

    return inversions
}

const nums = [1, 3, 2, 4, 5];
console.log(merge_sort(nums))
console.log(nums);

