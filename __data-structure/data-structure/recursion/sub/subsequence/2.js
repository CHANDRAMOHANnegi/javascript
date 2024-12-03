
// A subsequence is an array that can be derived from another array by deleting
// some or no elements without changing the order of the remaining elements.

function subSequence(str = "", result = [], asf = "", n) {
    if (str.length === 0) {
        result.push(asf)
        return
    }

    const ch = str[0]
    const roq = str.substring(1)

    subSequence(roq, result, asf + ch, n)
    subSequence(roq, result, asf + "", n)
}


let str = "abc"
let n = str.length

const result = []

subSequence(str, result, "", n)

console.log(result);





// -===>Subsequence order is maintained and not continuos
// Subsequence	[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]
