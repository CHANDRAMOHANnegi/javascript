const selectionSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

const numbers = [64, 25, 12, 22, 11];
console.log("Unsorted array:", numbers);
console.log("Sorted array:", selectionSort(numbers));
// Output:
// Unsorted array: [ 64, 25, 12, 22, 11 ]
