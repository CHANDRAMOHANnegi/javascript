
// A subsequence is an array that can be derived from another array by deleting
// some or no elements without changing the order of the remaining elements.

function subSequence(idx, str = "", result = [], asf = "", n) {
    if (idx === str.length) {
        result.push(asf)
        return
    }

    const ch = str[idx]

    subSequence(idx + 1, str, result, asf + ch, n)
    subSequence(idx + 1, str, result, asf + "", n)
}


let str = "abc"
let n = str.length

const result = []

subSequence(0, str, result, "", n)

console.log(result);





// -===>Subsequence order is maintained and not continuos
// Subsequence	[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]
