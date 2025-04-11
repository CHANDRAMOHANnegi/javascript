/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const pairs = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    const stack = []
    for (let i = 0; i < s.length; i++) {
        const elem = s[i]
        if (pairs[stack[stack.length - 1]] === elem) {
            stack.pop()
        } else {
            stack.push(elem)
        }
    }
    return stack.length === 0
};