

function myAll(promises) {
    const results = []
    let resolvedCount = 0;

    promises.forEach((promise, index) => {
        promise.then(val => { results[index] = val }).catch(err => err)
    });

    return new Promise()
}