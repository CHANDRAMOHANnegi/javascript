/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
    const visited = [...Array(grid.length)].map(e => Array(grid[0].length).fill(false))
    let count = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            /*****
             * use proper checks here
             * ****/
            if (!visited[i][j] && grid[i][j] === "1") {
                count++
                captureIsland(grid, visited, i, j)
            }
        }
    }

    return count
};

var captureIsland = function (grid, visited, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || visited[i][j] || grid[i][j] === "0")
        return false

    visited[i][j] = true
    captureIsland(grid, visited, i + 1, j) // bottom
    captureIsland(grid, visited, i - 1, j) // top
    captureIsland(grid, visited, i, j + 1) // right
    captureIsland(grid, visited, i, j - 1) // left
}


/********
 * 
 * Get connected components
 * *****/ 