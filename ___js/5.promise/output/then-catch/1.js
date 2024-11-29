new Promise((resolve, reject) => {
    resolve('First Success');
})
.then(result => {
    console.log(result); // What will be printed here?
    throw new Error('Error after first then');
})
.catch(error => {
    console.log(error.message); // What will be printed here?
    return 'Error Handled';
})
.then(result => {
    console.log(result); // What will be printed here?
});
