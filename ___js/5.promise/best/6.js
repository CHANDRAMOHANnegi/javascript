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

    return job(true);
}).then((data) => {
    if (data != 'victory') {
        throw "Defeat";
    }

    return job(true);
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err);

    return job(false);
}).then((data) => {
    console.log(data)

    return job(true);
}).catch((err) => {
    console.log(err);

    return "Error caught"
}).then((data) => {
    console.log(data)

    return new Error("test")
}).catch((err) => {
    console.log('=>',err);

    return job(false);
})