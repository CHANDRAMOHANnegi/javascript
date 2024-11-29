new Promise((resolve, reject) => {
    reject('Rejection');
})
    .catch(error => {
        console.log(error); // What will be printed here?
        return 'Recovery';
    })
    .then(result => {
        console.log(result); // What will be printed here?
    });
