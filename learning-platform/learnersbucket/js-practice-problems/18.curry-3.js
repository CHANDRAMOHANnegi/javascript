const curry = function (fn) {

    /***
     * if we declare store here then it will be in curry and 
     * other call will access it
     * **/
    // let store = []

    const inner = (...args) => {
        let store = []
        store.push(...args)
        // console.log(store);
        // we have all args
        if (store.length >= fn.length) {
            return fn(...store)
        } else {
            const inner2 = (...args2) => {
                store.push(...args2)
                // console.log('==',store);
                if (store.length >= fn.length) {
                    return fn(...store)
                } else {
                    return inner2
                }
            }
            return inner2
        }
    }
    return inner
}

/******
 * 
 * 
 * *****/
const curry2 = function (fn) {
    const inner = (...args) => {
        // we have all args
        if (args.length >= fn.length) {
            return fn(...args)
        } else {
            return (...args2) => inner(...args, ...args2)
        }
    }
    return inner
}

function sum(a, b, c, d) {
    return a + b + c + d;
}

let curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3, 4, 5));
console.log(curriedSum(1)(2, 3)(4));
console.log(curriedSum(1)(2)(3)(4));

// 10
// 10
// 10