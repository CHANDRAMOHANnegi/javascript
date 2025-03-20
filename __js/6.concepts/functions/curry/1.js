const curry = function () {
    let cache = 0;

    return (...args) => {
        const sum = args.reduce((acc, ele) => acc + ele, 0)
        cache += sum

        return cache
    }
};

//Returns and store the inner function.
let sum = curry();

console.log(sum(5)); //5
console.log(sum(3)); //8
console.log(sum(4)); //12
console.log(sum(0)); //12
console.log(sum()); //12