const pipe = (obj) => {
    const inner = (...args) => {
        for (const [key, value] of Object.entries(obj)) {
            const curr = obj[key]
            if (typeof curr === "object") {
                obj[key] = pipe(curr)(...args)
            } else if (typeof curr === "function") {
                obj[key] = curr(...args)
            }
        }
        return obj
    }
    return inner
}

let test = {
    a: {
        b: (a, b, c) => a + b + c,
        c: (a, b, c) => a + b - c,
    },
    d: (a, b, c) => a - b - c,
    e: 1,
    f: true
};

console.log(pipe(test)(1, 1, 1));

// expected output
// {
//   "a": {
//     "b": 3,
//     "c": 1
//   },
//   "d": -1,
//   "e": 1,
//   "f": true
// }