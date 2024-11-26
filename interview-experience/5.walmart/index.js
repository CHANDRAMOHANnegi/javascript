
// Given an integer array nums  return the next greater number for every element in nums.
// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

const arr = [2, 5, 1, 6, 5]
// const res = [5, 6, 6,-1, 6]

const nextGreaterToRightInRotated = (arr = []) => {
    const n = arr.length
    const res = Array(n).fill(-1)
    const stack = []

    let idx = arr.length - 1 

    while (idx >= 0) {
        while (stack.length && arr[idx] > stack[stack.length - 1]) {
            stack.pop()
        }
        if (stack.length) {
            res[idx] = stack[stack.length - 1]
        }
        stack.push(arr[idx])
        idx--
    }

    for(let i = 0; i < res.length; i++){
        if(res[i] === -1){
            let j = 0
            while (j < i) {
                if(arr[j] > arr[i]){
                    res[i] = arr[j]
                }
                j++
            }
        }
    }

    return res
}

// [2, 5, 1, 6, 5]
// [5, 6, 6,-1,-1]

console.log(nextGreaterToRightInRotated(arr));
