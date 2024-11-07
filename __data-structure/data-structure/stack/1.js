/**
 * @param {string} path
 * @return {string}
 */

// https://leetcode.com/problems/simplify-path/description/?envType=problem-list-v2&envId=stack

var simplifyPath = function (path) {
    const stack = []

    path = path.split("/")

    let idx = 0
    while (idx < path.length) {
        if (path[idx] === "." || path[idx] === "") {
        } else if (path[idx] === "..") {
            if (stack.length)
                stack.pop()
        } else
            stack.push(path[idx])
        idx++
    }

    return "/" + stack.join("/")
};

/*******
 * Focus on checks 
 * 
 * just applying check and not looking
 * 
 * RAM bharose nahi chalega, you will have to fix it
 * 
 * 
 * if hai to else bhi dekho
 * 
 * 
 * 
 * 
 * *******/ 