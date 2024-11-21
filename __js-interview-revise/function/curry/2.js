const sum = (...args) => {
    let cache = args

    if (cache.length === 0) {
        return 0
    } else {
        const inner = (...argsInner) => {
            // console.log(argsInner);
            if (argsInner.length > 0) {
                cache.push(...argsInner)
                //! cache.concat(argsInner) // concat return new array , without altering any array
                return inner
            } else {
                return cache.reduce((acc, ele) => acc + ele, 0)
            }
        }
        return inner
    }
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