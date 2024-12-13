/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function (nums) {
    const n = nums.length

    // 2, 6, -12, -48
    // -48, -24, -8, 4

    let max = -Infinity
    let product = 1

    // product from left to right
    for (let i = 0; i < n; i++) {
        product *= nums[i]
        max = Math.max(product, max)

        /*****
         * i forgot this check
         * 0 is a point in multiplication
         * if product becomes 0, reset product to 1
         * ****/ 
        if (product === 0) {
            product = 1
        }
    }

    // product from right to left
    product = 1
    for (let i = n - 1; i >= 0; i--) {
        product *= nums[i]
        max = Math.max(product, max)
        if (product === 0) {
            product = 1
        }
    }

    return max
};

/*******
 * 
 * Again, here i was thinking to store products, but there was not need to store
 * we can calculate results during traversing
 * 
 * *******/ 