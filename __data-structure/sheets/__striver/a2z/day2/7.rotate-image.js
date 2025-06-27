/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const transpose = (matrix) => {
    const n = matrix.length
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
}

const reverse = (row) => {
    let i = 0
    const n = row.length - 1

    while (i < n - i) {
        [row[i], row[n - i]] = [row[n - i], row[i]]
        i++
    }
}

const reverseRows = (matrix) => {
    for (const row of matrix) {
        reverse(row)
    }
}

var rotate = function (matrix) {
    // rotate = transpose -> reverse rows
    transpose(matrix)
    reverseRows(matrix)
};