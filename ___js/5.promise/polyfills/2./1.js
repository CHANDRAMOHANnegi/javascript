
function CustomPromise(executor) {
    if (typeof executor !== 'function') {
        throw new TypeError('CustomPromise resolver must be a function');
    }

    const self = this;
    self.state = 'pending'; // 'fulfilled', 'rejected', or 'pending'
    self.value = undefined; // Holds the resolved value or rejection reason
    self.handlers = []; // Stores the .then/.catch callbacks

    function resolve(value) {
        if (self.state !== 'pending') return;
        self.state = 'fulfilled';
        self.value = value;
        self.handlers.forEach(handle);
    }

    function reject(reason) {
        if (self.state !== 'pending') return;
        self.state = 'rejected';
        self.value = reason;
        self.handlers.forEach(handle);
    }

    function handle(handler) {
        if (self.state === 'fulfilled' && typeof handler.onFulfilled === 'function') {
            handler.onFulfilled(self.value);
        } else if (self.state === 'rejected' && typeof handler.onRejected === 'function') {
            handler.onRejected(self.value);
        }
    }

    self.then = function (onFulfilled, onRejected) {
        return new CustomPromise((resolve, reject) => {
            handle({
                onFulfilled: function (value) {
                    try {
                        const result = typeof onFulfilled === 'function' ? onFulfilled(value) : value;
                        resolve(result);
                    } catch (err) {
                        reject(err);
                    }
                },
                onRejected: function (reason) {
                    try {
                        const result = typeof onRejected === 'function' ? onRejected(reason) : reason;
                        reject(result);
                    } catch (err) {
                        reject(err);
                    }
                }
            });
        });
    };

    self.catch = function (onRejected) {
        return self.then(null, onRejected);
    };

    try {
        executor(resolve, reject);
    } catch (err) {
        reject(err);
    }
}

// Add the static `resolve` and `reject` methods
CustomPromise.resolve = function (value) {
    return new CustomPromise((resolve) => resolve(value));
};

CustomPromise.reject = function (reason) {
    return new CustomPromise((_, reject) => reject(reason));
};

// Add `all` and `race` methods
CustomPromise.all = function (promises) {
    return new CustomPromise((resolve, reject) => {
        let resolvedValues = [];
        let remaining = promises.length;

        function checkResolved() {
            if (remaining === 0) resolve(resolvedValues);
        }

        promises.forEach((promise, index) => {
            CustomPromise.resolve(promise)
                .then((value) => {
                    resolvedValues[index] = value;
                    remaining -= 1;
                    checkResolved();
                })
                .catch(reject);
        });

        if (promises.length === 0) resolve([]);
    });
};

CustomPromise.race = function (promises) {
    return new CustomPromise((resolve, reject) => {
        promises.forEach((promise) => {
            CustomPromise.resolve(promise).then(resolve).catch(reject);
        });
    });
};


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
