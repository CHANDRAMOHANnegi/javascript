function binarySearch(arr, target, start, end) {
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return mid; // Target found at index mid
        } else if (arr[mid] < target) {
            start = mid + 1; // Search in the right half
        } else {
            end = mid - 1; // Search in the left half
        }
    }

    return -1; // Target not found
}

const arr = [2, 3, 4, 10, 40];
const target = 10;
const start = 1;
const end = 4;

const result = binarySearch(arr, target, start, end);
if (result !== -1) {
    console.log("Element found at index " + result);
} else {
    console.log("Element not found");
}