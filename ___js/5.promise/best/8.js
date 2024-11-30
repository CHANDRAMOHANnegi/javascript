const p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, "p1")
})

const p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000, "p2")
})

const p3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1200, "p3")
})

const p4 = new Promise(function (resolve, reject) {
    setTimeout(reject, 300, "p4")
})

const p5 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 800, "p5")
})

const promise = Promise.all([p1, p2, p3, p4, p5])

promise.then(function (data) {
    data.forEach(element => {
        console.log(data);
    });
}).catch((err) => {
    console.log("error", err);
});


// error p4