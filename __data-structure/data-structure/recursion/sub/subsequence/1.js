
// A subsequence is an array that can be derived from another array by deleting
// some or no elements without changing the order of the remaining elements.

function subSequence(str = "", result = [], asf = "") {
    if (str.length === 0) {
        result.push(asf)
        return
    }

    const ch = str[0]
    const roq = str.substring(1)

    subSequence(roq, result, asf + ch)
    subSequence(roq, result, asf + "")
}

const str = "abc"
const result = []

console.log(subSequence(str, result, ""))

// -===>Subsequence order is maintained and not continuos
// Subsequence	[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]

/*****
 * 
 * here we are getting answer going to the end
 * 
 * 
 * ***/ 