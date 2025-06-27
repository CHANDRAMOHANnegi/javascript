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
