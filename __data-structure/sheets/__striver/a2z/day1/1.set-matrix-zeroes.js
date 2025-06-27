/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// way 1
const bruteForce = (matrix) => {
    const rowSet = new Set()
    const colSet = new Set()

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                rowSet.add(row)
                colSet.add(col)
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (rowSet.has(row) || colSet.has(col)) {
                matrix[row][col] = 0
            }
        }
    }
}

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const bruteForce = (matrix) => {
    const rowSet = new Set()
    const colSet = new Set()

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                rowSet.add(row)
                colSet.add(col)
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (rowSet.has(row) || colSet.has(col)) {
                matrix[row][col] = 0
            }
        }
    }
}

// way 2

const optimal = (matrix) => {

    let rowZero = false
    const ROWS = matrix.length
    const COLS = matrix[0].length

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (matrix[row][col] === 0) {
                matrix[0][col] = 0
                if (row === 0) {
                    rowZero = true
                } else {
                    matrix[row][0] = 0
                }
            }
        }
    }

    // start from last cell,
    // skip first row and col
    for (let row = ROWS - 1; row > 0; row--) {
        for (let col = COLS - 1; col > 0; col--) {
            if (matrix[0][col] === 0 || matrix[row][0] === 0) {
                matrix[row][col] = 0
            }
        }
    }

    // check first col
    if (matrix[0][0] === 0) {
        for (let row = 0; row < ROWS; row++) {
            matrix[row][0] = 0
        }
    }

    // check first row
    if (rowZero) {
        for (let col = 0; col < COLS; col++) {
            matrix[0][col] = 0
        }
    }

}

/**
 * 
 * [
 * 
 * 1 2 3
 * 4 0 6
 * 7 8 9
 * 
 * ]
 * 
 * **/





var setZeroes = function (matrix) {
    // return bruteForce(matrix)
    return optimal(matrix)
};