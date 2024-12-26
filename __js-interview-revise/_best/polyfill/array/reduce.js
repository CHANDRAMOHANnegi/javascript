Array.prototype.myReduce = function (callback, defaultValue) {
    if (!callback) {
        throw new TypeError(`${callback} is not function`)
    }
    let result = defaultValue
    let startIndex = 0

    if (result === undefined) {
        if (!this.length) {
            /****
             * this is only when initial value is not passed
             * ***/ 
            throw new TypeError(`reduce of empty array is not allowed`)
        }
        startIndex = 1
        result = this[0]
    }

    for (let index = startIndex; index < this.length; index++) {
        const element = this[index];
        result = callback(result, element, index, this)
    }

    return result
}

const arr = [1, 2, 3, 4, 5, 6]

console.log(arr.reduce((all, ele) => all + ele, 0));
console.log(arr.myReduce((all, ele) => all + ele, 0));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#initialvalue

/***
 * 
 * 
 * If initialValue is not specified, accumulator is initialized to the first value in the array, 
 * and callbackFn starts executing with the second value in the array as currentValue. 
 * 
 * **/ 