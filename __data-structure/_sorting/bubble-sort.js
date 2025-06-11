const bubbleSort = (arr) => {
  const n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};
// Example usage:
const numbers = [64, 25, 12, 22, 11];
console.log("Unsorted array:", numbers);
console.log("Sorted array:", bubbleSort(numbers));
// Output:
// Unsorted array: [ 64, 25, 12, 22, 11 ]
// Sorted array: [ 11, 12, 22, 25, 64 ]
