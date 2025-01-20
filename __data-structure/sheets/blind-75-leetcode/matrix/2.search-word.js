/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const searchWord = (board, word, r, c, visited, i) => {
    if (i === word.length) return true;

    if (
        r < 0 || c < 0 || r >= board.length ||
        c >= board[0].length || visited[r][c] || board[r][c] != word[i]
    ) return

    visited[r][c] = true

    const found = searchWord(board, word, r + 1, c, visited, i + 1) ||
        searchWord(board, word, r - 1, c, visited, i + 1) ||
        searchWord(board, word, r, c + 1, visited, i + 1) ||
        searchWord(board, word, r, c - 1, visited, i + 1)

    visited[r][c] = false

    return found
}

// C A A
// A A A
// B C D

var exist = function (board, word) {

    const rowNum = board.length
    const colNum = board[0].length

    for (let i = 0; i < rowNum; i++) {
        for (let j = 0; j < colNum; j++) {
            if (board[i][j] === word[0]) {
                const visited = Array.from({ length: rowNum }, () => Array(colNum).fill(false));
                console.log("==")
                if (searchWord(board, word, i, j, visited, 0)) {
                    /*****
                     * start search from 0, not 1,
                     * we search in all direction
                     * ***/ 
                    return true
                }
            }
        }
    }
    return false
};