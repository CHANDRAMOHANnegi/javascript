new Promise((resolve, reject) => {
    resolve('Success');
})
    .then(result => {
        console.log(result); // What will be printed here?
        return Promise.reject('Something went wrong');
    })
    .catch(error => {
        console.log(error); // What will be printed here?
    })
    .then(result => {
        console.log(result); // Will this be printed?
    });

// Success
// Something went wrong
// undefined