/**
 * @param {number[][]} grid
 * @return {number}
 */

/****
 * 
 * BFS from multiple points
 * in queue we will have all points,
 * 
 * We keep length of all points and apply bfs from these points,
 * and simultaneously push other points in queue
 * ***/

var orangesRotting = function (grid) {
    const rows = grid.length
    const cols = grid[0].length

    let time = 0
    let fresh = 0
    const rotten = []

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 1) fresh++
            if (grid[row][col] === 2) rotten.push([row, col])
        }
    }

    const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]]

    while (rotten.length && fresh) {
        const currentRotten = rotten.length
        for (let i = 0; i < currentRotten; i++) {
            let [r, c] = rotten.shift()
            for (const [dr, dc] of direction) {
                let row = dr + r
                let col = dc + c
                if (row < rows && row >= 0 && col < cols && col >= 0 && grid[row][col] == 1) {
                    if (grid[row][col] === 1) {
                        grid[row][col] = 2
                        //  this is bfs
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

/*****
 * here we are starting bfs at multiple points
 * 
 * **/ 