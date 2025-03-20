/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */


const binarySearch = (matrix, target) => {
    const rows = matrix.length
    const cols = matrix[0].length

    let start = 0
    let end = rows * cols - 1

    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        const row = Math.floor(mid / cols)
        const col = mid % cols

        const midnum = matrix[row][col]

        if (midnum === target) {
            return true
        } else if (target > midnum) {
            // why "mid + 1", because mid row and col is already searched
            start = mid + 1
        } else {
            end = mid - 1
        }
    }

    return false

}

var searchMatrix = function (matrix, target) {
    return binarySearch(matrix, target)
};