Array.prototype.mySlice = function name(start, end) {
    start = start || 0
    end = end || this.length

    const result = []

    for (let index = start; index < end; index++) {
        result.push(this[index])
    }

    return result
}

const arr = [1, 2, 3, 4, 5, 6]

console.log(arr.mySlice(0, 3));
console.log(arr.mySlice(3));


// console.log(arr.slice(0, 3));
// console.log(arr.slice(3));

// returns copy