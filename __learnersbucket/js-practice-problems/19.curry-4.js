
const add = function (...args) {
    let sum = args.reduce((acc, ele) => acc + ele, 0)

    function inner(...innerArgs) {
        sum += innerArgs.reduce((acc, ele) => acc + ele, 0)
        return inner
    }

    inner.valueOf = function () {
        return sum
    }

    inner.value = valueOf

    return inner
}

console.log(add(1)(2).value() == 3);
console.log(add(1, 2)(3).value() == 6);
console.log(add(1)(2)(3).value() == 6);
console.log(add(1)(2) + 3);

// Output:
// true
// true
// true
// 6