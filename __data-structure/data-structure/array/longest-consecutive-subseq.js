/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let count = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let i = 0;
      while (set.has(num + i)) {
        i++;
      }
      count = Math.max(count, i);
    }
  }

  return count;
};

/****
 *  Whats the actual problems we are solving here?
 *
 * 1. We need to find the longest consecutive sequence in an array of numbers.
 * 2. We need to ensure that we are not counting duplicates.
 * 3. We need to efficiently check for the existence of numbers in the sequence.
 *
 *
 * why we chose set?
 * 1. Set provides O(1) average time complexity for lookups, which is efficient for checking existence.
 * 2. It automatically handles duplicates, so we don't have to worry about them.
 * 3. The overall time complexity of this approach is O(n), where n is the number of unique elements in the input array.
 *
 *
 * **/

// how do we know that we have to use set?
// 1. The problem requires checking for the existence of consecutive numbers efficiently.
// 2. Using a set allows us to quickly determine if a number exists in the sequence without needing to iterate through the array multiple times.
// 3. The set data structure is well-suited for problems involving uniqueness and membership checks, which aligns with the requirements of this problem.
// 4. The use of a set simplifies the logic for finding the longest consecutive sequence by allowing us to focus on the starting points of sequences rather than managing duplicates or order.
// 5. The set-based approach avoids the need for sorting or additional data structures, making it more efficient in terms of both time and space complexity.
// 6. The problem can be solved in linear time, O(n), using a set, which is optimal for this type of problem.
