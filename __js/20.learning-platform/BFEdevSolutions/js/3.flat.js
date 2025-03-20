/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  if (!Array.isArray(arr) || depth === 0) {
    return arr;
  }
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      /*****
       * here we are handling the empty values
       * empty values are not same as undefined
       * 
       * Empty slots (<empty items>) in the array are not the same as undefined. When flattened,
       * they won't appear unless explicitly set (e.g., arr[4] = undefined).
       * 
       * **/
      if (Array.isArray(arr[i])) {
        const res = flat(arr[i], depth - 1);
        result.push(...res);
      } else {
        result.push(arr[i]);
      }
    }
  }
  return result;
}
const arr = [1, 2];
arr[4] = undefined;
arr[5] = [3, 4];
arr[5][4] = [5, 6, [7, 8, [9, 10]]];

// Testing the result
console.log(flat(arr, Infinity));
// Expected output: [1, 2, undefined, 3, 4, 5, 6, 7, 8, 9, 10]