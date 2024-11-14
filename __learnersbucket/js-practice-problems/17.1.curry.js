
/****
 * add numbers till no more numbers are provided in args
 * ***/

const sum = (...args1) => {
    if (!args1.length)
        return 0

    let total = args1.reduce((a, b) => a + b, 0)

    const inner = function (...args2) {
        if (!args2.length)
            return total
        total += args2.reduce((a, b) => a + b, 0)
        return (args2.length) === 0 ? () => total : inner
    }

    return inner
}


const res = sum(1, 2, 3, 4)();
const res2 = sum(1)(2)(3)(4)();
const res3 = sum(1, 2)(3, 4)();
const res4 = sum(1, 2, 3)(4)();
const res5 = sum(1)(2, 3, 4)();
const res6 = sum();

console.log(res, res2, res3, res4, res5, res6);

// Output:
// 10 10 10 10 10 0


