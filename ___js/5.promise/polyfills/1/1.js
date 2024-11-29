function CustomPromise(executor) {
    let onResolve, onReject, isCalled = false,
        isFulfilled = false, isRejected = false, output, err;

    // Then function for handling successfull promise execution
    this.then = function (resolveCallback) {
        // Storing resolve callback function
        onResolve = resolveCallback;

        // Check if the promise has not yet resolved/rejected and executor isFulfilled
        if (!isCalled && isFulfilled) {
            // Mark the promise as resolved
            isCalled = true;
            onResolve(output);
        }
        // Returning this to enable chaining of then
        return this;
    }

    // Catch function for handling errors in promise execution
    this.catch = function (rejectCallback) {
        // Storing reject callback function
        onReject = rejectCallback;

        // Check if the promise has not yet resolved/rejected and executor isRejected
        if (!isCalled && isRejected) {
            // Mark the promise as rejected
            isCalled = true;
            onReject(err);
        }
        // Returning this to enable chaining of catch
        return this;
    }

    // Resolver function
    function resolver(data) {
        // Mark the isFulfilled flag as true since the executor work isFulfilled 
        // and store result in output
        isFulfilled = true;
        output = data;

        // Calling the resolve function with data
        if (typeof onResolve === 'function' && !isCalled) {
            isCalled = true;
            onResolve(data);
        }
    }

    // Rejecter function
    function rejecter(error) {
        // Mark the isRejected flag as true since the executor work isFulfilled 
        // and store result in output
        isRejected = true;
        err = error;

        // Calling the reject function with error
        if (typeof onReject === 'function' && !isCalled) {
            isCalled = true;
            onReject(error);
        }
    }

    // Calling the executor function with resolver and rejecter
    executor(resolver, rejecter);
}

const executor = (resolve, reject) => {
    setTimeout(() => {
        console.log("hello");
        resolve("5")
    }, 1000)
}

const p2 = new CustomPromise(executor)

p2.then(d => {
    console.log("1", d);
    // return new Promise(function (resolve, reject) {
    //     setTimeout(() => {
    //         // console.log(result);
    //         resolve("inner result"); // 3
    //     }, 1000);
    //     // reject("error");
    // })

    // return new Promise((res) => res("then return"))
    return "then return"
}).then(d => {
    console.log('=>---', d);
}).then(() => {
    console.log("------",);
})


p2.then(d => {
    console.log('=>', d);
}).then(() => {
    console.log("---====---",);
})
