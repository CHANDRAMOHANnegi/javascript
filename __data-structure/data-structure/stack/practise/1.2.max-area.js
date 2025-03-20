/**
 * @param {number[]} height
 * @return {number}
 */

// out of left and right, we get the min height, and hence area
// update max

var maxArea = function (height) {
    let maxWater = 0
    let left = 0
    let right = height.length - 1

    while (left < right) {
        const minHeight = Math.min(height[left], height[right])
        const width = right - left
        maxWater = Math.max(maxWater, minHeight * width)

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return maxWater
};

// don't use stack here, use 2 pointer