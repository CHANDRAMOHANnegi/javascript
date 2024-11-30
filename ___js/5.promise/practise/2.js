const p1 = new Promise(resolve => setTimeout(resolve, 500, 'p1'));
const p2 = new Promise((resolve,reject) => setTimeout(reject, 1000, 'p2'));

Promise.all([p1, p2]).then(result => console.log('all:', result));
Promise.race([p1, p2]).then(result => console.log('race:', result));
