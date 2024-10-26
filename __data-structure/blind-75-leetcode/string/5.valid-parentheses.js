/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
    if (s.length <= 1) return false
    let stack = [s[0]]
    let i = 1
    while (i < s.length) {
        const ch = s[i]
        const top = stack[stack.length - 1]

        if (ch === ")" && top === "(" || ch === "]" && top === "[" || ch === "}" && top === "{")
            stack.pop(ch)
        else
            stack.push(ch)

        i++
    }

    return !stack.length

};

/*****
 * 
 * while (i < s.length) {}
 * 
 * i was doing this check
 * while (i < s) {}
 * 
 * ****/ 