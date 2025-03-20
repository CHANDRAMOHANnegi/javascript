const curry = function () {
    let sum = 0
    const inner = (...args) => {
        sum += args.reduce((acc, ele) => acc + ele, 0)
        return sum
    }
    return inner
};

//Returns and store the inner function.
let sum = curry();

console.log(sum(5)); //5
console.log(sum(3)); //8
console.log(sum(4)); //12
console.log(sum(0)); //12
console.log(sum()); //12