
// This is a JavaScript coding problem from BFE.dev 

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */

const hasPlaceHolder = (args) => args.some(arg => arg === curry.placeholder)

const mergeArgs = (prevArgs, nextArgs) => {
    const merged = []
    let nextIndex = 0

    for (const arg of prevArgs) {
        if (arg === curry.placeholder && nextIndex < nextArgs.length) {
            merged.push(nextArgs[nextIndex++])
        } else {
            merged.push(arg)
        }
    }

    while (nextIndex < nextArgs.length) {
        merged.push(nextArgs[nextIndex++])
    }

    return merged
}

function curry(fn) {
    const inner = (...args) => {
        if (args.length >= fn.length && !hasPlaceHolder(args)) {
            return fn(...args.slice(0, fn.length))
        }
        const gatherArgs = (...args2) => {
            const merged = mergeArgs(args, args2)
            if (merged.length >= fn.length && !hasPlaceHolder(merged)) {
                return fn(...merged.slice(0, fn.length))
            }
            return inner(...merged)
        }
        return gatherArgs
    }
    return inner
}

curry.placeholder = Symbol()


const curriedJoin = curry(join)
const _ = curry.placeholder
curriedJoin(1, 2, 3) // '1_2_3'
curriedJoin(_, 2)(1, 3) // '1_2_3'