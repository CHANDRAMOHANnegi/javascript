/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
    let count = 0
    const rows = grid.length
    const cols = grid[0].length
    const visited = Array.from({ length: rows }, () => Array.from({ length: cols }, () => false))

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (captureLand(grid, visited, row, col, rows, cols)) count++ // what am i returning  from here, what is the aim of this function
        }
    }

    return count
};

const captureLand = (grid, visited, row, col, rows, cols) => {
    if (row >= rows || col >= cols || row < 0 || col < 0 || !visited[row][col] || grid[row][col] === 0)
        /****
         * grid[row][col] === "0"
         * visited[row][col]
         * **/
        return false // you can return anything or not

    visited[row][col] = true
    return captureLand(grid, visited, row + 1, col, rows, cols) || // or conditions not needed
        captureLand(grid, visited, row - 1, col, rows, cols) ||
        captureLand(grid, visited, row, col + 1, rows, cols) ||
        captureLand(grid, visited, row, col - 1, rows, cols)
}


/****
 * captureLand the aim of capture island is to capture land, not to return anything
 * 
 * just keep traversing and mark land as yours
 * 
 * */ 