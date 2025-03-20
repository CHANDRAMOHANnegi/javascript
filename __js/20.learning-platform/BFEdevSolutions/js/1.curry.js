// This is a JavaScript coding problem from BFE.dev 

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */

function curry(fn) {
    const inner = (...args) => {
        if (args.length >= fn.length) {
            return fn(...args)
        } else {
            return (...args2) => inner(...args, ...args2)
        }
    }
    return (...args) => inner(...args)
}


