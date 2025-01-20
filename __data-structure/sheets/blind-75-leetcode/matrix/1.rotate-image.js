/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// https://www.youtube.com/watch?v=SoxrXQbhCPI&list=PL-Jc9J83PIiFkOETg2Ybq-FMuJjkZSGeH&index=11

const transpose = (matrix) => {
    const rowNum = matrix.length
    const colNum = matrix[0].length
    for (let row = 0; row < rowNum; row++) {
        /*****
         * Important point
         * during transpose start col from row + 1
         * ***/
        for (let col = row + 1; col < colNum; col++) {
            const temp = matrix[row][col]
            matrix[row][col] = matrix[col][row]
            matrix[col][row] = temp
        }
    }
    return matrix
}

const reverseCols = (matrix) => {
    const rowNum = matrix.length
    const colNum = matrix[0].length
    /**
     * 
     * don't use "="
     * col <= Math.floor(colNum / 2);
     * if even no of columns, it can give issues
     * 
     * ***/
    for (let col = 0; col < Math.floor(colNum / 2); col++) {
        for (let row = 0; row < rowNum; row++) {
            const temp = matrix[row][col]
            matrix[row][col] = matrix[row][colNum - col - 1]
            matrix[row][colNum - col - 1] = temp
        }
    }
    return matrix
}


var rotate = function (matrix) {
    return reverseCols(transpose(matrix))
};