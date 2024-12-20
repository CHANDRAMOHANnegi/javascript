const p = new Promise((resolve) => {
    setTimeout(() => {
        console.log("tick 1"); // 1
        resolve("reward");
    });
});

// console.log(Promise.resolve(p) === p) // true

Promise.resolve(p).then((a) => {
    console.log("tick 2", a); // 2
});

p.then((d) => {
    console.log('=>', d);
})