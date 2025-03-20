const defaultCompareFn = (a, b) => {
    const aStr = String(a);
    const bStr = String(b);
    if (aStr < bStr) return -1;
    if (aStr > bStr) return 1;
    return 0;
};

function customSort(compareFn) {
    // DO NOT REMOVE
    'use strict';
    const array = this
    const compare = compareFn ?? defaultCompareFn

    // bubble-sort
    for (let first = 0; first < array.length; first++) {
        for (let second = first; second < array.length; second++) {
            if (compare(array[first], array[second]) > 0) {
                [array[second], array[first]] = [array[first], array[second]]
            }
        }
    }

    return array
}

Array.prototype.customSort = customSort;
