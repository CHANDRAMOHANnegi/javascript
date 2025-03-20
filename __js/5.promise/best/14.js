console.log("start");

const p = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2)
    console.log(3);
})

p.then((result) => {
    console.log(result);
})

console.log('end');
