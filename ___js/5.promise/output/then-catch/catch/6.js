new Promise((resolve, reject) => {
    reject('An error occurred');
})
    .then(result => {
        console.log(result); // Will this be printed?
    })
    .catch(error => {
        console.log('Caught Error:', error); // What will be printed here?
        return 'Handled in catch';
    })
    .then(result => {
        console.log(result); // What will be printed here?
    });
