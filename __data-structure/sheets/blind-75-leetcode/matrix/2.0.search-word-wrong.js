/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const searchWord = (board, word, r, c, visited) => {

    let row = r;
    let col = c;
    let i = 1;

    visited[r][c] = true; // Mark the starting cell as visited

    while (i < word.length) {
        const char = word[i]; // Get the current character to match

        // Check down
        if (row < board.length - 1 && !visited[row + 1][col] && board[row + 1][col] === char) {
            visited[row + 1][col] = true;
            row++;
        }
        // Check right
        else if (col < board[0].length - 1 && !visited[row][col + 1] && board[row][col + 1] === char) {
            visited[row][col + 1] = true;
            col++;
        }
        // Check up
        else if (row > 0 && !visited[row - 1][col] && board[row - 1][col] === char) {
            visited[row - 1][col] = true;
            row--;
        }
        // Check left
        else if (col > 0 && !visited[row][col - 1] && board[row][col - 1] === char) {
            visited[row][col - 1] = true;
            col--;
        }
        // If no valid move, return false
        else {
            return false;
        }

        i++; // Move to the next character in the word
    }

    return true; // Return true if the entire word is found
};

var exist = function (board, word) {

    const rowNum = board.length;
    const colNum = board[0].length;

    // Loop through every cell in the board
    for (let i = 0; i < rowNum; i++) {
        for (let j = 0; j < colNum; j++) {
            if (board[i][j] === word[0]) { // If the first character matches
                const visited = Array.from({ length: rowNum }, () => Array(colNum).fill(false)); // Initialize the visited array
                if (searchWord(board, word, i, j, visited)) {
                    return true;
                }
            }
        }
    }

    return false; // Return false if no matching word is found
};

/*********
 * 
 * What was I doing wrong here,
 * I was just checking one direction
 * 
 * 
 * 
 * ******/ 