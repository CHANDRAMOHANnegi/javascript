/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

const binarySearch = (matrix, target) => {
    const m = matrix.length
    const n = matrix[0].length

    let left = 0
    let right = m * n - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const row = Math.floor(mid / n)
        const col = mid % n

        if (matrix[row][col] > target) {
            right = mid - 1
        } else if (matrix[row][col] < target) {
            left = mid + 1
        } else {
            return true
        }
    }

    return false
}


var searchMatrix = function (matrix, target) {
    return binarySearch(matrix, target)
};