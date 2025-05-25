/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const ROWS = matrix.length;
    const COLS = matrix[0].length;
    const res = [];

    let totalCell = ROWS * COLS;

    let dir = "r"; // Directions: "r" (right), "b" (bottom), "l" (left), "u" (up)
    let r = 0, c = 0;
    let left = 0, top = 0;
    let right = COLS - 1, bottom = ROWS - 1;

    while (totalCell > 0) {
        totalCell--;

        if (dir === "r") { // Move right
            res.push(matrix[r][c]);
            if (c === right) {
                dir = "b"; // Change direction to bottom
                top++; // Shrink the top boundary
                r++;
            } else {
                c++;
            }
        } else if (dir === "b") { // Move bottom
            res.push(matrix[r][c]);
            if (r === bottom) {
                dir = "l"; // Change direction to left
                right--; // Shrink the right boundary
                c--;
            } else {
                r++;
            }
        } else if (dir === "l") { // Move left
            res.push(matrix[r][c]);
            if (c === left) {
                dir = "u"; // Change direction to up
                bottom--; // Shrink the bottom boundary
                r--;
            } else {
                c--;
            }
        } else if (dir === "u") { // Move up
            res.push(matrix[r][c]);
            if (r === top) {
                dir = "r"; // Change direction back to right
                left++; // Shrink the left boundary
                c++;
            } else {
                r--;
            }
        }
    }

    return res;
};




/****
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * ****/




/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function (mat) {
    const n = mat.length;
    const m = mat[0].length;
    let left = 0, right = m - 1;
    let top = 0, bottom = n - 1;

    const result = []

    while (top <= bottom && left <= right) {
        // right
        for (let i = left; i <= right; i++) {
            result.push(mat[top][i])
        }
        top++

        // bottom
        for (let i = top; i <= bottom; i++) {
            result.push(mat[i][right])
        }
        right--

        // left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(mat[bottom][i])
            }
            bottom--
        }

        // top
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(mat[i][left])
            }
            left++
        }
    }

    return result

};