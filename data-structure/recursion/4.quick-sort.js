function sort(arr) {
  const res = quickSort(arr, 0, arr.length - 1);
  console.log("=-=", res);
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quick(arr, start, end) {
  if (start >= end) {
    return start;
  }
  let pivot = start;
  let left = start + 1;
  let right = end;

  while (left <= right) {
    while (left <= right && arr[left] < arr[pivot]) {
      left++;
    }

    while (right >= left && arr[right] > arr[pivot]) {
      right--;
    }

    if (left < right) {
      swap(arr, left, right);
    }
  }
  /**
   * why swap with right,
   * because right will cross left and will be
   * pointing towards the smaller element
   *
   * */
  swap(arr, pivot, right);
  pivot = right;

  return pivot;
}

function quickSort(arr, start, end) {
  if (start >= end) {
    return arr;
  }
  const idx = quick(arr, start, end);

  quickSort(arr, start, idx - 1);
  quickSort(arr, idx + 1, end);
  return arr;
}

const arr = [1, 3, 2, 4, 5];
sort(arr);
