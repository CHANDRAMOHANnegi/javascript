class MyPromise {
    #state;
    #result;
    #handlers;

    constructor(executor) {
        this.#state = 'pending';
        this.#result = undefined;
        this.#handlers = [];

        try {
            executor(this.#resolve.bind(this), this.#reject.bind(this));
        } catch (error) {
            this.#reject(error);
        }
    }

    // Resolve the promise, with proper handling for thenables (including MyPromises)
    #resolve(value) {
        if (this.#state !== 'pending') return;  // Prevent resolution if already settled

        // If the value is a promise, resolve it as such
        if (value instanceof MyPromise) {
            value.then(this.#resolve.bind(this), this.#reject.bind(this));
            return;
        } else if (value && typeof value.then === 'function') {
            // Handle generic thenables (non-MyPromise objects that have a `then` method)
            value.then(this.#resolve.bind(this), this.#reject.bind(this));
            return;
        }

        this.#state = 'fulfilled';
        this.#result = value;

        // Execute handlers after resolution
        queueMicrotask(() => {
            this.#executeHandlers();
        });
    }

    // Reject the promise, preventing further state changes
    #reject(reason) {
        if (this.#state !== 'pending') return;  // Prevent rejection if already settled

        this.#state = 'rejected';
        this.#result = reason;

        // Execute handlers after rejection
        queueMicrotask(() => {
            this.#executeHandlers();
        });
    }

    // Execute the handlers if the promise is already settled
    #executeHandlers() {
        this.#handlers.forEach(handler => this.#executeHandler(handler));

        // Clear handlers after execution
        this.#handlers = [];
    }

    // Execute the individual handler for fulfilled or rejected promises
    #executeHandler(handler) {
        if (this.#state === 'fulfilled') {
            if (typeof handler.onFulfilled === 'function') {
                handler.onFulfilled(this.#result);
            }
        } else if (this.#state === 'rejected') {
            if (typeof handler.onRejected === 'function') {
                handler.onRejected(this.#result);
            }
        }
    }

    // The 'then' method for chaining promises
    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            this.#handlers.push({
                onFulfilled: (value) => {
                    try {
                        const result = onFulfilled ? onFulfilled(value) : value;
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
                            reject(reason);
                        }
                    } catch (error) {
                        reject(error);
                    }
                }
            });

            // If the promise is already settled, execute handlers immediately
            if (this.#state !== 'pending') {
                queueMicrotask(() => this.#executeHandlers());
            }
        });
    }

    // The 'catch' method for catching rejections
    catch(onRejected) {
        return this.then(undefined, onRejected);
    }

    // Static resolve method
    static resolve(value) {
        if (value instanceof MyPromise) return value;
        return new MyPromise((resolve) => resolve(value));
    }

    // Static reject method
    static reject(reason) {
        return new MyPromise((_, reject) => reject(reason));
    }
}


const mp1 = new MyPromise((resolve, reject) => {
    setTimeout(() => resolve(1), 100); // Resolving mp1 after 100ms
});

const mp = new MyPromise((resolve, reject) => {
    resolve(mp1); // Resolving `mp` with `mp1`
    reject(3); // Will not be executed because `mp` is already resolved
}).then((data) => {
    console.log('resolve', data); // This should log "resolve 1"
}, (reason) => {
    console.log('reject', reason); // This won't be executed
});