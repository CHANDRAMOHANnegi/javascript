

const ngetr = (arr) => {

    let idx = arr.length - 1
    const stack = [arr[idx]]
    idx--
    const res = [-1]

    while (idx >= 0) {
        if (stack.length && arr[idx] >= stack[stack.length - 1]) {
            stack.pop()
        } else {
            res.unshift(stack.length ? stack[stack.length - 1] : -1)
            /*****
             * why are we pushing this element,
             * because, this element can be answer for next elements
             * ***/
            stack.push(arr[idx])
            idx--
        }
    }
    return res
}

const arr = [2, 5, 9, 3, 1, 12, 6, 8, 7]
console.log(ngetr(arr))

/****
 * 
 * O(2n)
 * inner loop run only n time
 * if something is not pushed it will be not popped
 * 
 * 
 * ----steps----
 * 
 * -  => pop the smaller in stack
 * a  => set answer
 * +  => push the greater to stack
 * 
 * *****/ 