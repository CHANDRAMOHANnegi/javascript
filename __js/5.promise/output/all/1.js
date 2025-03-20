let promise1 = Promise.resolve('Resolved Promise 1');
let promise2 = Promise.resolve('Resolved Promise 2');

Promise.all([promise1, promise2])
    .then(results => {
        console.log(results); // What will this print?
        return 'All Promises Resolved';
    })
    .then(result => {
        console.log(result); // What will this print?
    })
    .catch(error => {
        console.log(error);
    });
