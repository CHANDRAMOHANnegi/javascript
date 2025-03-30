/**
 * @param {number[][]} grid
 * @return {number}
 */

var orangesRotting = function (grid) {
    const rows = grid.length
    const cols = grid[0].length

    let time = 0
    let fresh = 0
    const rotten = []

    for (const row in rows) {
        for (const col in cols) {
            if (grid[row][col] === 1) fresh++
            if (grid[row][col] === 2) rotten.push([row, col])
        }
    }

    const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]]

    while (rotten.length && fresh) {
        const currentRotten = rotten.length
        for (let i = 0; i < currentRotten; i++) {
            let [row, col] = rotten.shift()
            for (const [dr, dc] of direction) {
                // here i was updating row col, god knows why
                // think what you are writing
                row = row + dr
                col = col + dc
                if (row < rows && row >= 0 && col < cols && col >= 0 && grid[row][col] == 1) {
                    if (grid[row][col] === 1) {
                        grid[row][col] = 2
                        rotten.push([row, col])
                        fresh--
                    }
                }

            }
        }
        time++
    }
    return fresh === 0 ? time : -1
};

