/**
 * @param {number[]} nums
 * @return {number}
 */

// 2, 3, -2, 4

const brutus = (nums) => {
    let max = nums[0]

    for (let i = 0; i < nums.length; i++) {
        let product = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            max = Math.max(product, max)
            product *= nums[j]
        }
        max = Math.max(product, max)
    }

    return max
}

var product = function (nums) {
    let result = nums[0], prevMax = nums[0], prevMin = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // given the new number, the new maximun can have 3 conditions
        // 1. number(+) * prevMax(+) is the largest
        // 2. number(+) it self is the largest
        // 3. number(-) * prevMin(-) is the largest 
        curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);

        curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);

        // updating the prevMax & prevMin, these two may swap locations
        prevMax = curMax
        prevMin = curMin

        result = Math.max(curMax, result);
    }
    return result;
}

var maxProduct = function (nums) {
    return product(nums)
    // return brutus(nums)
};