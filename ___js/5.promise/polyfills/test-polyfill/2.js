const { CustomPromise } = require("../2");

const p1 = new CustomPromise((resolve, reject) => setTimeout(() => resolve(1), 1000));
const p2 = new CustomPromise((resolve, reject) => setTimeout(() => reject(2), 100));
const p3 = new CustomPromise((resolve, reject) => setTimeout(() => resolve(3), 500));

CustomPromise.all([p1, p2, p3])
    .then(d => {
        console.log(d); // Logs: 1
        // return d;
    }).catch(d => {
        console.log("--->", d); // Logs: ---> Error in promise
    });
