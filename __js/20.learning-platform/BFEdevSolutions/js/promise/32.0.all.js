
/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
    if (!promises.length) return Promise.resolve([])
    let count = 0
    const results = []
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            /***
             * 
             * 1. If "p" is not a promise, "Promise.resolve(p)" always return a new resolved promise 
             * 
             * 2. If the "p" is a promise, "Promise.resolve(p)" would return "p" exactly.
             *    "Promise.resolve(p) === p" would be "true".
             * 
             * ***/

            Promise.resolve(promises[i]).then(result => {
                results[i] = result
                count++
                if (count === promises.length) {
                    return resolve(results)
                }
            })
                .catch(error => {
                    return reject(error)
                })
        }
    })
}