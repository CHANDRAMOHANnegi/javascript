new Promise((resolve, reject) => {
    reject('Error Occurred');
})
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error); // What will be printed here?
        return Promise.resolve('Recovered');
    })
    .then(result => {
        console.log(result); // What will be printed here?
    });
