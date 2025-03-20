function job(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Resolving", delay);
            resolve("done " + delay)
        }, delay)
    })
}

var promise = Promise.all([job(1000), job(2000), job(500), job(1500)])

promise.then((result) => {
    console.log("All done");
    result.forEach(text => {
        console.log(text);
    });
}).catch((err) => {

});