
const add = function (...args1) {

    let cache = args1

    function inner(...args2) {
        cache.push(...args2)
        return inner
    }

    inner.valueOf = function () {
        return cache.reduce((acc, ele) => acc + ele, 0)
    }

    inner.value = inner.valueOf

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
