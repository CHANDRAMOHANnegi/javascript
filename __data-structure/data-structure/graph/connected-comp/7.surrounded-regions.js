/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */


var solve = function (board) {
    const rows = board.length
    const cols = board[0].length

    /*****
     * close all the region which are at edges first and capture and close them
     * **/

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] === "O" && (row === 0 || row === rows - 1 || col === 0 || col === cols - 1)) {
                capture(board, row, col, rows, cols,)
            }
        }
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            /***
             * we dint capture from here , because we have already captured edges, if edges are captured, everything is captured
             * 
             * **/
            if (board[row][col] === "O") {
                board[row][col] = "X"
            } else if (board[row][col] === "#") {
                board[row][col] = "O"
            }
        }
    }

    return board
};

const capture = (board, row, col, rows, cols) => {
    if (row >= rows || col >= cols || row < 0 || col < 0 || board[row][col] === "X" || board[row][col] === "#") return false // board[row][col] === "#" , take care of this check
    board[row][col] = "#"

    const left = capture(board, row, col - 1, rows, cols,)
    const right = capture(board, row, col + 1, rows, cols,)
    const up = capture(board, row - 1, col, rows, cols,)
    const down = capture(board, row + 1, col, rows, cols,)
}

// [
//     ["O","O","O"],
//     ["O","O","O"],
//     ["O","O","O"]
// ]
