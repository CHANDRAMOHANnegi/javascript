
/**
 * interface Matcher {
 *  toBe(data: any): void
 * }
 */
/**
 * @param {any} input
 * @returns {Matcher & {not: Matcher}}
 */
function myExpect(input) {
    // your code here
    const result = {
        toBe: (s) => {
            if (Object.is(input, s)) { } else {
                throw new Error("error")
            }
        },
    }
    return new Proxy(result, {
        get(target, prop, receiver) {
            if (prop === "not") {
                return {
                    toBe: (s) => {
                        console.log(s, input);
                        if (!Object.is(input, s)) { } else {
                            throw new Error("-error")
                        }
                    }
                }
            } else {
                return target[prop];
            }
        },
    })
}



console.log(myExpect(NaN).toBe(NaN))