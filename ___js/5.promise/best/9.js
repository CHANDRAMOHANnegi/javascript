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

const promise = Promise.all([
    p1.catch(function () { }),
    p2.catch(function () { }),
    p3.catch(function () { }),
    p4.catch(function () { }),
    p5.catch(function () { })
])

promise.then(function (data) {
    data.forEach(element => {
        console.log(data);
    });
}).catch((err) => {
    console.log("error", err);
});


// [ 'p1', 'p2', 'p3', undefined, 'p5' ]
// [ 'p1', 'p2', 'p3', undefined, 'p5' ]
// [ 'p1', 'p2', 'p3', undefined, 'p5' ]
// [ 'p1', 'p2', 'p3', undefined, 'p5' ]
// [ 'p1', 'p2', 'p3', undefined, 'p5' ]

/****
 * only one catch will run
 * 
 * 
 * ****/ 