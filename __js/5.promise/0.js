const p = new Promise((resolve) => setTimeout(()=>resolve(0)));

Promise.resolve(1)
    .then(console.log)
