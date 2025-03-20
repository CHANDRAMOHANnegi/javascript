// let p1 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'Resolved 1'));
// let p2 = new Promise((resolve, reject) => setTimeout(reject, 200, 'Rejected 2'));

// Promise.allSettled([p1, p2])
//     .then(result => console.log(result))
//     .catch(error => console.log(error));


// // // 1

// let p1 = Promise.resolve('Resolved');
// let p2 = Promise.reject('Rejected');

// Promise.allSettled([p1, p2]).then(results => console.log(results));
// let promise = new Promise((resolve, reject) => {
//     resolve('Operation successful');
// });


       let promise = new Promise((resolve, reject) => {
        resolve('First resolution');
        resolve('Second resolution');
    });
    
    promise.then(result => console.log(result));
    