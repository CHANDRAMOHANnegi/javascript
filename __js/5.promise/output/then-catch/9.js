new Promise((resolve, reject) => {
    resolve('Starting');
})
.then(result => {
    console.log(result);
    throw new Error('Something went wrong');
})
.then(result => {
    console.log(result); // Will this be printed?
})
.catch(error => {
    console.log('Caught Error:', error.message); // What will be printed here?
});
