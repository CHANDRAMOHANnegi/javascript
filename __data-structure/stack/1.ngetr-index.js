const ngetr = (arr = []) => {
    const stack = []
    /*******
     * we can sometime fill it with arr.length
     * to mark that next greater for this element fis outside window
     * ***/ 
    const res = Array(arr.length).fill(-1);

    let idx = arr.length - 1

    while (idx >= 0) {
        while (stack.length && arr[idx] >= arr[stack[stack.length - 1]]) {
            stack.pop()
        }
        if (stack.length) {
            res[idx] = stack[stack.length - 1]
        }
        stack.push(idx)
        idx--
    }
    return res
};


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