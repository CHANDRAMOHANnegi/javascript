/**
 * @param {number[][]} mat
 * @return {number[]}
 */

var findDiagonalOrder = function (mat) {
    const rowNum = mat.length
    const colNum = mat[0].length

    let up = true
    let row = 0
    let col = 0

    const res = []

    for (let i = 0; i < rowNum * colNum; i++) {
        res.push(mat[row][col])

        if (up) {
            if (col == colNum - 1) {
                row++
                up = false
            } else if (row === 0) {
                col++
                up = false
            } else {
                row--
                col++
            }
        } else {
            if (row === rowNum - 1) {
                col++
                up = true
            } else if (col == 0) {
                up = true
                row++
            } else {
                row++
                col--
            }
        }
    }

    return res
};

/*****
 * We are just navigating using row and col
 * ****/ 


