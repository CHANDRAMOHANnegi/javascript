new Promise((resolve, reject) => {
    resolve(10);
})
    .then(result => {
        console.log(result); // What will be printed here?
        if (result > 5) {
            return 'Greater than 5';
        } else {
            return 'Less than 5';
        }
    })
    .then(result => {
        console.log(result); // What will be printed here?
    });
