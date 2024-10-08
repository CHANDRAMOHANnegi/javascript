/**
 * @param {number[]} nums
 * @return {number[]}
 */


var productExceptSelfBrute = function (nums) {
    const n = nums.length

    let leftPro = [nums[n - 1]]

    for (let i = n - 2; i >= 0; i--) {
        leftPro.unshift(leftPro[0] * nums[i])
    }

    let rightPro = [nums[0]]

    for (let i = 1; i < n; i++) {
        rightPro.push(rightPro[i - 1] * nums[i])
    }

    // 1, 2, 3, 4
    // 24,24,12,4
    // 1 ,2 ,6 ,24

    const res = nums.map((num, i) => {
        let res = 1
        if (i === 0) {
            res = leftPro[1]
        } else if (i === n - 1) {
            res = rightPro[n - 2]
        } else {
            res = rightPro[i - 1] * leftPro[i + 1]
        }
        return res
    })
    // console.log(res,leftPro,rightPro)

    return res
};

/**
 * What was i doing wrong
 * i was calculating both left-products and right-products
 * it can be done with only only one side, and the calculate other side with results
 */

var productExceptSelfOptimal = function (nums) {
    const n = nums.length

    let rightToLeft = [nums[n - 1]]

    for (let i = n - 2; i >= 0; i--) {
        rightToLeft.unshift(rightToLeft[0] * nums[i])
    }

    let leftToRight = 1
    for (let i = 0; i < n - 1; i++) {
        rightToLeft[i] = leftToRight * rightToLeft[i + 1]
        leftToRight = leftToRight * nums[i]
    }
    rightToLeft[n - 1] = leftToRight

    return rightToLeft
};