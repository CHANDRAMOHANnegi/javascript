
const pipe2 = (obj) => {

    const inner = (...args) => {
        Object.keys(obj).forEach(key => {
            /***
             * we just need to check for function and object
             * **/
            if (typeof obj[key] === "function") {
                obj[key] = obj[key](...args)
            } else if (typeof obj[key] === "object") {
                obj[key] = pipe2(obj[key])(...args)
            }
        })
        return obj
    }

    return inner
}


const test = {
    a: {
        b: (a, b, c) => a + b + c,
        c: (a, b, c) => a + b - c,
    },
    d: (a, b, c) => a - b - c,
    e: 1,
    f: true
}

// console.log(pipe1(test)(1, 1, 1));
console.log(pipe2(test)(1, 1, 1));