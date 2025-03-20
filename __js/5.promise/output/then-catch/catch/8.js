new Promise((resolve, reject) => {
    reject('Error Occurred');
})
    .then(result => {
        console.log(result); // Will this be printed?
    })
    .catch(error => {
        console.log('Caught Error:', error); // What will be printed here?
        return 'Handled Error';
    })
    .then(result => {
        console.log(result); // What will be printed here?
    });
