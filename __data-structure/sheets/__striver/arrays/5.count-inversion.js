

let cnt = 0
function sort(nums) {

    mergeSort(nums, 0, nums.length - 1)
    return nums
}


function mergeSort(nums, start, end) {
    if (start >= end) {
        return
    }

    const n = nums.length

    const mid = Math.floor((start + end) / 2)

    mergeSort(nums, start, mid)
    mergeSort(nums, mid + 1, end)
    merge2(nums, start, mid, end)
}

function merge2(nums, start, mid, end) {
    const n = nums.length

    const left = nums.slice(start, mid + 1)
    const right = nums.slice(mid + 1, end + 1)

    let i = 0;
    let j = 0;
    let k = start;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            nums[k++] = left[i++];
        } else {
            nums[k++] = right[j++];
            cnt += (mid - start + 1)
        }
    }

    while (i < left.length) {
        nums[k++] = left[i++];
    }

    while (j < right.length) {
        nums[k++] = right[j++];
    }

    return nums
}

const nums = [2, 4, 1, 3, 5]
sort(nums)
console.log('=-=', cnt, nums);
