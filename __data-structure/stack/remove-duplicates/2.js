/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var removeDuplicates = function (s, k) {

    /*****
     * how stack can be used to store value ans its count
     * 
     * this is good
     * 
     * 
     * *****/ 
    const stack = [[s[0], 1]]

    let idx = 1

    while (idx < s.length) {
        const char = s[idx]

        if (stack.length  && stack[stack.length - 1][0] === char) {
            const top = stack.pop()
            stack.push([top[0], top[1] + 1])
        } else {
            stack.push([char, 1])
        }

        if (stack.length && stack[stack.length - 1][1] === k) {
            stack.pop()
        }
        idx++
    }

    return stack.map(a => a[0].repeat(a[1])).join("")
};


/********
 * Here we fixed pop, push call
 * 
 * ******/ 