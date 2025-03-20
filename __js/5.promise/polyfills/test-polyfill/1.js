const { CustomPromise } = require("../2");

const p = new CustomPromise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

p
    .then(d => {
        console.log(d); // Logs: 1
        // return d;
        throw new Error("Error in promise"); // Throws an error
    })
    .then(d => {
        console.log('==', d); // Logs: 1
    })
    .catch(d => {
        console.log("--->", d.message); // Logs: ---> Error in promise
    });
