
const sequence = (s, idx, curr, result) => {
    if (idx === s.length) {
        result.push(curr)
        return
    }

    sequence(s, idx + 1, curr + s[idx], result)
    sequence(s, idx + 1, curr, result)
}

const allSequence = (s) => {
    const result = []
    sequence(s, 0, "", result)
    return result
}

console.log(allSequence("abc"));
