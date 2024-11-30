function delay(time) {
    return new Promise(res =>
        setTimeout(res, time, `success ${time}`)
    )
}

Promise.race([delay(500), delay(100)])
    .then(function (data) {
        console.log(data);
    })