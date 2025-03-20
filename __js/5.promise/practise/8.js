new Promise((resolve, reject) => {
    resolve(5);
})
.then(result => {
    console.log(result); // What will be printed here?
    return result * 2;
})
.then(result => {
    console.log(result); // What will be printed here?
    return Promise.reject(result + 3);
})
.then(result => {
    console.log(result); // What will be printed here?
});
