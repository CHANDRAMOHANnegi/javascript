class CustomPromise {
    constructor(executor) {
        if (typeof executor != "function") {
            throw new TypeError("Pass proper executor function");
        }
        this.state = "pending";
        this.value = undefined;
        this.handlers = [];
        executor(this.resolve.bind(this), this.reject.bind(this));
    }

    resolve(value) {
        if (this.state !== "pending") return;
        this.value = value;
        this.state = "fulfilled";
        this.#handleHandlers();
    }

    reject(value) {
        if (this.state !== "pending") return;
        this.value = value;
        this.state = "rejected";
        this.#handleHandlers();
    }

    then(onFulfilled, onRejected) {
        return new CustomPromise((resolve, reject) => {
            const handler = {
                onFulfilled: (value) => {
                    try {
                        const result = onFulfilled(value);
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                },
                onRejected: (reason) => {
                    try {
                        if (onRejected) {
                            const result = onRejected(reason);
                            resolve(result);
                        } else {
                            reject(reason);  // Propagate rejection if no onRejected handler
                        }
                    } catch (error) {
                        reject(error);
                    }
                }
            };
            this.handlers.push(handler);
            if (this.state !== "pending") {
                /***
                 * important check
                 * **/ 
                this.#handleHandlers();
            }
        });
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }

    #handleHandlers() {
        if (this.state === "fulfilled") {
            this.handlers.forEach(handle => {
                if (typeof handle.onFulfilled === "function") {
                    handle.onFulfilled(this.value);
                }
            });
            this.handlers = []; // Clear handlers after being fulfilled
        } else if (this.state === "rejected") {
            this.handlers.forEach(handle => {
                // only run rejected handler
                if (typeof handle.onRejected === "function") {
                    handle.onRejected(this.value);
                }
            });
            this.handlers = []; // Clear handlers after being rejected
        }
    }


    static all(...promiseArray) {
        const result = []
        let completed = 0

        return new CustomPromise((resolve, reject) => {
            try {
                promiseArray.forEach((promise, idx) => {
                    promise.then(res => {
                        result[idx] = res
                        completed++
                        if (completed === promiseArray.length) {
                            resolve(result)
                        }
                    })
                })
            } catch (error) {
                reject(error)
            }
        })

    }
}

module.exports = { CustomPromise }