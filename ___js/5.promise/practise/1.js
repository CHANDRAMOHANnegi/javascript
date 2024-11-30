const p1 = Promise.resolve("Promise 1")

const p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, "Promise 2")
})

Promise.all([p1, p2])
    .then(console.log)
    .catch(console.log)