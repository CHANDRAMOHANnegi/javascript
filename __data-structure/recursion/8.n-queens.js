

/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function (n) {
    const chess = Array.from({ length: n }).map(e => Array.from({ length: n }).map(a => "."))
    const ans = []
    solveRec(chess, 0, ans)
    return ans
};

var solveRec = function (chess, row, ans) {
    if (row === chess.length) {
        ans.push([...chess].map(row => row.join("")))
        return
    }

    for (let col = 0; col < chess.length; col++) {
        if (isQueenSafe(chess, row, col)) {
            chess[row][col] = "Q"
            /******
             * after putting queen in one of the row, we will make call to next row, that's why new call
             * 
             * 
             * this is different from sudoku, where after putting one number we make call to next recursion
             * **/ 
            solveRec(chess, row + 1, ans)
            chess[row][col] = "."
        }
    }
}

var isQueenSafe = function (chess, row, col) {
    // check if there is a queen above the head.
    for (let i = 0; i < row; i++) {
        if (chess[i][col] === "Q") {
            return false
        }
    }

    //check if there is a queen on the right-top corner.
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (chess[i][j] === "Q") {
            return false
        }
    }

    // check if there is a queen on the left-top corner.
    for (let i = row - 1, j = col + 1; i >= 0 && j <= chess.length; i--, j++) {
        if (chess[i][j] === "Q") {
            return false
        }
    }

    return true
}


console.log(solveNQueens(4))