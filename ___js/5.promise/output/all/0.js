let p1 = Promise.resolve('First');
let p2 = Promise.reject('Second');

Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(error => console.log(error)); // What will be printed?
