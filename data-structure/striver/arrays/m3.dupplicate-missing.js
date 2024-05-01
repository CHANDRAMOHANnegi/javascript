
function findMissingRepeatingNumbers(a) {

    let arr = [-1, -1];
    let n = a.length;
    let realsum = n * (n + 1) / 2;
    let dupsum = 0;
    let duplicate = 0;
    a.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        dupsum += a[i];
        if (a[i] == a[i + 1]) {
            duplicate = a[i];
        }
    }

    let missing = 0;
    // realsum + duplicate = dupsum + missing

    missing = (realsum + duplicate) - dupsum;

    arr[0] = duplicate;
    arr[1] = missing;

    return arr;
}


console.log(findMissingRepeatingNumbers([8, 4, 1, 6, 7, 2, 5, 8]))