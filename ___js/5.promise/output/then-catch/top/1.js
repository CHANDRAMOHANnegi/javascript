new Promise((resolve, reject) => {
    resolve(5);
})
    .then(result => {
        console.log(result); // What will be printed here?
        return new Promise(resolve => setTimeout(() => resolve('Delayed Result'), 1000));
    })
    .then(result => {
        console.log(result); // What will be printed here after 1 second?
    });
