/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const ngetr = (arr) => {
    const stack = []
    /*******
     * we can sometime fill it with arr.length
     * to mark that next greater for this element fis outside window
     * ***/ 
    const res = Array(arr.length - 1).fill(arr.length)
    let idx = arr.length - 1

    while (idx >= 0) {
        while (stack.length && arr[idx] >= arr[stack[stack.length - 1]]) {
            stack.pop()
        }
        if (stack.length)
            res[idx] = stack[stack.length - 1]

        stack.push(idx)
        idx--
    }

    return res
}

var maxSlidingWindow = function (nums, k) {
    const nge = ngetr(nums)
    const res = []

    let left = 0

    while (left + k <= nums.length) {
        let right = left
        while (nge[right] < left + k) {

            /*****
             * if next greater is within this window 
             * then jump to that point,
             * because all other are smaller
             * 
             * ****/ 
            right = nge[right]
        }
        res.push(nums[right])
        left++
    }
    return res
};