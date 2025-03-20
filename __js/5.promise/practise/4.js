new Promise((resolve, reject) => {
    resolve('Success');
})
    .then(result => {
        console.log(result);
        throw new Error('Something went wrong');
        // throw Error('Something went wrong');
        // throw 'Something went wrong'
    })
    .catch(error => {
        console.log(error.message); // What is the output here?
        // console.log(error); // What is the output here?
    });
