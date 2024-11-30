
const p = new Promise((resolve) => setTimeout(resolve));

const p2 = new Promise((resolve) => resolve(p)).then(() => {
    console.log("tick 3");
});

p.then(() => {
    console.log("tick 1");
}).then(() => {
    console.log("tick 2");
});

p2.then(result => console.log("p2--->4 ", result));


// console.log(p1 === Promise.resolve(p1)); // true
