/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const res = [[1]]

    for (let i = 1; i < numRows; i++) {
        const row = [1]
        for (let j = 1; j <= i; j++) {
            const num = (res[i - 1][j - 1] ?? 0) + (res[i - 1][j] ?? 0)
            row.push(num)
        }
        res.push(row)
    }

    return res
};