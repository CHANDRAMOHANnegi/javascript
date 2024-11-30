const p = new Promise((resolve) => setTimeout(() => resolve("resolved"), 0));

Promise.resolve(p)
    .then((value) => console.log("Promise.resolve:", value));

new Promise((resolve) => resolve(p))
    .then((value) => console.log("new Promise:", value));

p.then((value) => console.log("Direct p.then:", value));
