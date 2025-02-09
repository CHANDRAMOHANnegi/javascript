/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
    let maxWater = 0, left = 0, right = height.length - 1

    while(left < right){
        maxWater = Math.max(maxWater, (right - left) * Math.min(height[left],height[right]))
        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
    }

    return maxWater
};