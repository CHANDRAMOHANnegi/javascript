

function sort(nums) {

    mergeSort(nums, 0, nums.length - 1)
    return nums
}


function mergeSort(nums, start, end) {
    if (start >= end) {
        return
    }

    const n = nums.length

    /***
     * 
     * mid = start + (end - start) / 2
     * mid equals start plus half of the length.
     * 
     * both are same => (start / 2) + (end / 2) 
     * 
     * mid = (start + end) / 2
     * mid equals the average of start and end
     * 
     * **/

    const mid = Math.floor((start + end) / 2)

    mergeSort(nums, start, mid)
    mergeSort(nums, mid + 1, end)
    merge2(nums, start, mid, end)
}

function merge(nums, start, mid, end) {
    const n = nums.length

    const finalArray = []

    let i = start
    let j = mid + 1
    while (finalArray.length < n) {
        if (i <= mid && j <= end && nums[i] && nums[j]) {
            if (nums[i] < nums[j]) {
                finalArray.push(nums[i])
                i++
            } else {
                finalArray.push(nums[j])
                j++
            }
        } else if (i <= mid && nums[i]) {
            finalArray.push(nums[i])
            i++
        } else if (j <= end) {
            finalArray.push(nums[j])
            j++
        } else {
            break
        }
    }
    console.log(finalArray);
    for (let i = start; i <= end; i++) {
        nums[i] = finalArray[i - start]
    }
    return nums
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

const nums = [3, 2, 4, 1, 5]
sort(nums)
console.log(nums);
