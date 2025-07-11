class Solution {
    findMissingRepeatingNumbers(nums) {
        let expectedSum = 0; // Sum of numbers from 1 to n
        let expectedSquareSum = 0; // Sum of squares of numbers from 1 to n
        let actualSum = 0; // Sum of the given array
        let actualSquareSum = 0; // Sum of squares of the given array

        // Calculate expected sums and actual sums
        for (let i = 0; i < nums.length; i++) {
            actualSum += nums[i];
            actualSquareSum += nums[i] * nums[i];

            const num = i + 1; // The number expected at this index (1 to n)
            expectedSum += num;
            expectedSquareSum += num * num;
        }

        // Calculate differences
        const sumDifference = expectedSum - actualSum; // x - y
        const squareSumDifference = expectedSquareSum - actualSquareSum; // x^2 - y^2

        // Solve for x and y
        const sumOfMissingAndRepeating = squareSumDifference / sumDifference; // x + y
        const missingNumber = (sumOfMissingAndRepeating + sumDifference) / 2; // x
        const repeatingNumber = missingNumber - sumDifference; // y

        return [repeatingNumber, missingNumber];
    }
}

/******
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

function findMissingRepeatingNumbers(a) {
    let n = a.length;

    let realSum = (n * (n + 1)) / 2;
    let realSquareSum = (n * (n + 1) * (2 * n + 1)) / 6;

    // console.log(realSum, realSquareSum);

    let [currSum, currSquareSum] = a.reduce((a, e) => [a[0] + e, a[1] + e * e], [0, 0])

    // console.log(currSum, currSquareSum);

    let val1 = currSum - realSum
    let dup, mis
    // dup - mis = currSum - realSum

    let val2 = currSquareSum - realSquareSum

    // dup^2 - mis^2 =  currSquareSum - realSquareSum

    //  (dup + mis) * (dup - mis) = val2

    // dup + mis = (val2) / (dup - mis)
    // dup + mis = (val2) / val1

    /***
     * so 1. dup - mis = currSum - realSum
     * so 2. dup + mis = (val2) / (dup - mis)
     * so 3. dup + mis = (val2) / val1
     * */

    // 2 * dup  = val2 + val1

    // dup + mis = (val2) / val1
    val2 = val2 / val1

    dup = (val1 + val2) / 2
    mis = dup - val1

    return [mis, dup];
}

// [8, 4, 1, 6, 7, 2, 5, 8]
// console.log(findMissingRepeatingNumbers([1, 5, 3, 2, 5]))
console.log(findMissingRepeatingNumbers([8, 4, 1, 6, 7, 2, 5, 8]))

