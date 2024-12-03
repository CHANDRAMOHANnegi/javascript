const ngetr = (arr = []) => {
    const stack = [];
    /*******
     * We use circular indices (i % arr.length) to handle rotation
     * Traverse twice to simulate the circular behavior
     * Fill with -1 if no greater element exists
     * ***/
    const res = Array(arr.length).fill(-1);
    let idx = arr.length * 2 - 1; // Start from the last element in the circular array

    while (idx >= 0) {
        const circularIdx = idx % arr.length; // Wrap around the array

        while (stack.length && arr[circularIdx] >= arr[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length) {
            res[circularIdx] = arr[stack[stack.length - 1]];
        }
        stack.push(circularIdx);
        idx--;
    }
    return res;
};

const arr = [2, 5, 9, 3, 1, 12, 6, 8, 7];
console.log(ngetr(arr)); // Output: [ 5, 9, 12, 12, 12, -1, 8, 9, 9 ]
