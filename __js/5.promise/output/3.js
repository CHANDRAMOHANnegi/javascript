new Promise((resolve, reject) => {
    resolve('Step 1');
})
.then(result => {
    console.log(result); // What will this print?
    return 'Step 2';
})
.then(result => {
    console.log(result); // What will this print?
});
