const sum = (...args) => {
    if (args.length === 0) {
        return 0
    }
    const store = [...args]
    const inner = (...args2) => {
        store.push(...args2)
        if (args2.length === 0) {
            return store.reduce((acc, ele) => acc + ele, 0)
        } else {
            return inner
        }
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