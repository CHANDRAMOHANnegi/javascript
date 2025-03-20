function cancelablePromise(executor) {
    let cancelFn;

    const promise = new Promise((resolve, reject) => {
        cancelFn = () => reject('Promise was canceled');
        executor(resolve, reject);
    });

    // Attach the cancel function to the promise
    promise.cancel = cancelFn;

    return promise;
}

// Usage
const promise = cancelablePromise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data fetched');
    }, 5000);
});

// Cancel the promise after 2 seconds
setTimeout(() => {
    promise.cancel();
}, 2000);

// Handle promise
promise
    .then(result => console.log(result))
    .catch(err => console.log(err));  // Will log: "Promise was canceled"
