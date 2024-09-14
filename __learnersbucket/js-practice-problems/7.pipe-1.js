

const pipe1 = (obj) => {
    const inner = function (...args) {
        const resolve = (obj) => {
            Object.keys(obj).forEach(key => {
                if (typeof obj[key] === 'object') {
                    obj[key] = resolve(obj[key])
                } else if (typeof obj[key] === 'function') {
                    obj[key] = obj[key](...args)
                }
            })
            return obj
        }

        return resolve(obj)
    }

    return inner
}

const pipe2 = (obj) => {
    const inner = function (...args) {
        Object.keys(obj).forEach(key => {
            if (typeof obj[key] === 'object') {
                obj[key] = pipe2(obj[key])(...args)
            } else if (typeof obj[key] === 'function') {
                obj[key] = obj[key](...args)
            }
        })
        return obj

        return resolve(obj)
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


