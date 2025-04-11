
const subString = (s = "", idx, curr = [], result = []) => {
    for (let index = idx; index < s.length; index++) {
        curr.push(s.substring(idx, index + 1))
    }
    result.push(curr)
}

const allSubstring = (s) => {
    const result = []
    for (let i = 0; i < s.length; i++) {
        const ch = s[i]
        subString(s, i, [], result)
    }
    return result
}

console.log(allSubstring("abc"));


const allSubstring2 = (s) => {
    const result = []
    for (let i = 0; i < s.length; i++) {
        const curr = []
        for (let index = i; index < s.length; index++) {
            curr.push(s.substring(i, index + 1))
        }
        result.push(curr)
    }
    return result
}

console.log(allSubstring2("abc"));

/*****
 * 
 * jab bhi substring ki baat ho to, start with every char
 * 
 * ****/ 