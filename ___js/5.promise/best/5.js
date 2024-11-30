function job(state) {
    return new Promise(function (resolve, reject) {
        if (state) {
            resolve("success")
        } else {
            reject("error")
        }
    })
}

const promise = job(true)

promise.then((data) => {
    console.log(data)
    return job(false);
}).catch((err) => {
    console.log(err);
    return "Error caught"
}).then((data) => {
    console.log(data)
    return job(true);
}).catch((err) => {
    console.log(err);
})