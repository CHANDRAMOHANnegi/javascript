class MyPromise {
  constructor(executor) {
    this.id= parseInt(Math.random()*1000)
    this.state = 'pending';
    try {
      executor(this._resolve.bind(this), this._reject.bind(this));
    } catch (error) {
      this._reject(error);
    }
  }
  _resolve(value) {
    if (this.state !== 'pending') return;
    this.state = 'fulfilled';
    this.result = value;
    queueMicrotask(() => {
      if (this.onFulfilled === undefined) return;
      try {
        const returnValue = this.onFulfilled(this.result);
        const isReturnValuePromise = returnValue instanceof MyPromise;
        if (!isReturnValuePromise) {
          this.thenPromiseResolve(returnValue);
        } else {
          returnValue.then(this.thenPromiseResolve, this.thenPromiseReject);
        }
      } catch (error) {
        this.thenPromiseReject(error);
      }
    });
  }
  _reject(error) {
    if (this.state !== 'pending') return;
    this.state = 'rejected';
    this.result = error;
    queueMicrotask(() => {
      if (this.onRejected === undefined) return;
      try {
        const returnValue = this.onRejected(this.result);
        const isReturnValuePromise = returnValue instanceof MyPromise;
        if (!isReturnValuePromise) {
          this.thenPromiseResolve(returnValue);
        } else {
          returnValue.then(this.thenPromiseResolve, this.thenPromiseReject);
        }
      } catch (error) {
        this.thenPromiseReject(error);
      }
    });
  }
  then(onFulfilled, onRejected) {
    // Register consuming functions.
    const isOnFulfilledFunction = typeof onFulfilled === 'function';
    this.onFulfilled = isOnFulfilledFunction ? onFulfilled : (value) => value;
    const isOnRejectedFunction = typeof onRejected === 'function';
    this.onRejected = isOnRejectedFunction
      ? onRejected
      : (error) => {
        throw error;
      };
      console.log('---',this);

    return new MyPromise((resolve, reject) => {
      // Register `resolve` and `reject`, so that we can
      // resolve or reject this promise in `_resolve`
      // or `_reject`.
      // console.log(this);
      
      this.thenPromiseResolve = resolve;
      this.thenPromiseReject = reject;
    });
  }
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }
  static resolve(value) {
    const isValuePromise = value instanceof MyPromise;
    if (isValuePromise) {
      return value;
    }
    return new MyPromise((resolve) => {
      resolve(value);
    });
  }
  static reject(value) {
    return new MyPromise((_, reject) => {
      reject(value);
    });
  }
}


const mp = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000)
}).then((data) => {
  console.log('resolve', data); // This should log "resolve 1"
}, (reason) => {
  console.log('reject', reason); // This won't be executed
}).then(d => {
  console.log('===');
});