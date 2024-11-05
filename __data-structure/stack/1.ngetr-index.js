
const ngetr = (arr = []) => {
    let idx = 0
    const stack = [idx]
    let res = Array(arr.length).fill(-1)

    while (idx < arr.length) {
        if (stack.length && arr[idx] >= arr[stack[stack.length - 1]]) {
            const top = stack.pop()
            res[top] = arr[idx]
        } else {
            stack.push(idx)
            idx++
        }
    }
    res = res.map(ele => ele || -1)
    return res
}

const arr = [2, 5, 9, 3, 1, 12, 6, 8, 7]
console.log(ngetr(arr))

/****
 * 
 * smaller will be pushed to the stack,
 * when greater appears it will, it will set itself as
 * answer to all smaller
 * 
 * stack me vo element honge jin se bada abhi tak mila nahi hai
 * 
 * 
 * O(2n)
 * inner loop run only n time
 * if something is not pushed it will be not popped
 * 
 * 
 * ----steps----
 * 
 * 
 * *****/ 