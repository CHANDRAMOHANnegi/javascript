
const add = function (...args) {
    let total = args.reduce((a, b) => a + b, 0)

    function inner(...args2) {
        total += args2.reduce((a, b) => a + b, 0)

        return inner
    }

    inner.value = inner.valueOf = function () {
        return total
    }
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