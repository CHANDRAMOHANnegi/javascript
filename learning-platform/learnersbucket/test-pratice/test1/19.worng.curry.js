
const add = function (...args1) {
    /****
     * 
     * args are getting lost, because they are not in closure
     * either pass them in functions
     * 
     * ***/
    const inner = (...args2) => {
        const total = [...args1, ...args2].reduce((all, val) => all + val, 0)
        return inner
    }

    inner.value = () => total

    inner.valueOf = function () {
        return total
    }

    return inner
}

console.log(add(1)(2).value() == 3);
console.log(add(1, 2)(3).value() == 6);
console.log(add(1)(2)(3).value() == 6);
console.log(add(1)(2) + 3);
