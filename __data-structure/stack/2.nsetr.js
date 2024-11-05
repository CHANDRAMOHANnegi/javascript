

const nsetr = (arr) => {

    const stack = [arr[arr.length - 1]]
    const res = [-1]

    let idx = arr.length - 2
    while (idx >= 0) {
        if (stack.length && arr[idx] <= stack[stack.length - 1]) {
            stack.pop()
        } else {
            res.unshift(stack.length ? stack[stack.length - 1] : -1)
            /****
             * we have to keep pushing elements
             * they can be answer 
             * 
             * **/ 
            stack.push(arr[idx])
            idx--
        }
    }
    return res
}

const arr = [2, 5, 9, 3, 1, 12, 6, 8, 7]
console.log(nsetr(arr))

/****
 * 
 * O(2n)
 * inner loop run only n time
 * if something is not pushed it will be not popped
 * 
 * ----steps----
 * 
 * 
 * *****/ 