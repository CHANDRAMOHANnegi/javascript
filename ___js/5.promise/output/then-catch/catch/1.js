new Promise((resolve, reject) => {
    reject('Error 1');
})
    .then(result => {
        console.log(result); // Will this be printed?
    })
    .catch(error => {
        console.log('First Catch:', error); // What will be printed here?
        throw new Error('Error 2');
    })
    .catch(error => {
        console.log('Second Catch:', error.message); // What will be printed here?
    });
