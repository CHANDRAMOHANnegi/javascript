const promise = new Promise((resolve, reject) => {
    reject(Error("Some error occurred"))
})

promise.catch(error => console.log(error.message))
promise.catch(error => console.log(error.message))

// Some error occurred
// Some error occurred