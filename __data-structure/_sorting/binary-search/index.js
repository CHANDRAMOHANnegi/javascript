function binarySearch(arr, target, start, end) {
    let mid = -1
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        console.log(mid);
        if (arr[mid] === target) {
            return mid; // Target found at index mid
        } else if (arr[mid] < target) {
            start = mid + 1; // Search in the right half
        } else {
            end = mid - 1; // Search in the left half
        }
    }

    return mid; // Target not found
}

const arr = [2, 3, 4, 10, 40];
const target = 0;
const start = 1;
const end = 4;

const result = binarySearch(arr, target, start, end);
console.log(result);

if (result == -1) {
    console.log("Element not found");
} else {
    console.log("Element found at index " + result);
}