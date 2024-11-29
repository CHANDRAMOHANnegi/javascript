new Promise((resolve, reject) => {
    resolve('Resolved');
})
    .then(result => {
        console.log(result); // What will be printed here?
        throw new Error('Error in First .then()');
    })
    .catch(error => {
        console.log('Caught in first catch:', error.message); // What will be printed here?
        throw new Error('Error in First Catch');
    })
    .catch(error => {
        console.log('Caught in second catch:', error.message); // What will be printed here?
    });
