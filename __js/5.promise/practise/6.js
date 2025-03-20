let promise = new Promise((resolve, reject) => {
    resolve('First resolution');
    resolve('Second resolution');
});

promise.then(result => console.log(result));
