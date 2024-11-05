

const ngetl = (arr) => {

    const stack = [arr.length - 1]
    const res = [-1]

    let idx = 1
    while (idx < arr.length) {
        if (stack.length && arr[idx] >= stack[stack.length - 1]) {
            stack.pop()
        } else {
            res.push(stack.length ? stack[stack.length - 1] : -1)
            stack.push(arr[idx])
            idx++
        }
    }
    return res
}

const arr = [2, 5, 9, 3, 1, 12, 6, 8, 7]
console.log(ngetl(arr))


/****
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