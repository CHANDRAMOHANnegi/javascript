/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var solveSudoku = function (board) {
    solveRec(board)
};

var solveRec = function (board) {

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === ".") {
                for (let num = 1; num <= 9; num++) {
                    let charNum = num.toString();
                    if (isSafe(charNum, board, row, col)) {
                        board[row][col] = charNum
                        /******
                         * After setting the number in this place, we make call to  whole sudoku again,
                         * it will again check from beginning, where we can put next number
                         * *****/
                        if (solveRec(board)) {
                            return true
                        } else {
                            /****
                             * if even after setting number, on further recursion we find that it is not solving sudoku,
                             * we revert and make place for other recursion calls
                             * ***/ 
                            board[row][col] = "."
                        }
                    }
                }
                return false
            }
        }
    }
    return true

}

var isSafe = function (num, board, row, col) {
    for (let i = 0; i < 9; i++) {
        // Check row
        if (board[row][i] === num) return false;
        // Check column
        if (board[i][col] === num) return false;
        // Check 3x3 subgrid
        const r = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const c = 3 * Math.floor(col / 3) + (i % 3);
        if (board[r][c] === num) return false;
    }
    return true;
};


/*****
 * in n-queens we make call to new rows, and we pass row in parameter, we are not doing that here,
 * 
 * because if u put some number in some place, we are again calling whole sudoku to scan from beginning
 * 
 * that's why ever time we are making new call
 * 
 * ****/ 