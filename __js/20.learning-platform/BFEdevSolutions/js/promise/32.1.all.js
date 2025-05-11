
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
            const promise = promises[i]
            if (!(promise instanceof Promise)) {
                results[i] = promise
                count++
                if (count === promises.length) {
                    return resolve(results)
                }
            } else {
                promises[i].then(result => {
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
        }

    })
}


// all() should return a promise  

// all() should resolve to array of each promise's result  

// all() should reject to the first error  

// all([]) should resolve right away  

// all([1,2,3, Promise.resolve(4)]) should resolve right away  

// all([1,2,3, Promise.reject('error')]) should reject  