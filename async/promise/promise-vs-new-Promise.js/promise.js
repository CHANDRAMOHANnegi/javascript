const p = new Promise(resolve => setTimeout(resolve));

Promise.resolve(p).then(() => {
    console.log("tick 3");
});

p.then(() => {
    console.log("tick 1");
}).then(() => {
    console.log("tick 2");
});

// tick 3
// tick 1
// tick 2

// If the value is a promise, Promise.resolve(value) 
// would return value exactly. 
// Promise.resolve(value) === value would be true.