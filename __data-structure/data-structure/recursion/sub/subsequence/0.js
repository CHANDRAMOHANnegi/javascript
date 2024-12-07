
// A subsequence is an array that can be derived from another array by deleting
// some or no elements without changing the order of the remaining elements.

function subSequence(str) {
    if (str.length === 0) {
        return [""]
    }

    const ch = str[0]
    const ros = str.substring(1)

    const subs = subSequence(ros)

    const result = []
    subs.forEach(sub => {
        result.push("" + sub)
        result.push(ch + sub)
    });

    return result
}

const str = "abc"
console.log(subSequence(str))

// -===>Subsequence order is maintained and not continuos
// Subsequence	[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]

/*****
 * 
 * here the recursion is in reverse direction
 * we are forming answer while coming back from recursion
 * 
 * ***/ 