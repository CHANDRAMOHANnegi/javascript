let promise = new Promise((resolve, reject) => {
    resolve('Resolved');
});

promise
    .then(result => {
        console.log(result); // What will this print?
        return new Promise(resolve => resolve('New Promise Resolved'));
    })
    .then(result => {
        console.log(result); // What will this print?
    })
    .catch(error => {
        console.log(error);
    });
