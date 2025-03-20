class MyPromise {
  #state = "pending"; // pending, fulfilled, or rejected
  #value;
  #handlers = []; // Handlers registered via `then`

  constructor(executor) {
      try {
          executor(this.#resolve.bind(this), this.#reject.bind(this));
      } catch (error) {
          this.#reject(error);
      }
  }

  #resolve(value) {
      if (this.#state !== "pending") return;

      this.#state = "fulfilled";
      this.#value = value;

      this.#handleHandlers();
  }

  #reject(reason) {
      if (this.#state !== "pending") return;

      this.#state = "rejected";
      this.#value = reason;

      this.#handleHandlers();
  }
  then(onFulfilled, onRejected) {
      return new MyPromise((resolve, reject) => {
          this.#handlers.push({
              onFulfilled: typeof onFulfilled === "function" ? onFulfilled : null,
              onRejected: typeof onRejected === "function" ? onRejected : null,
              resolve,
              reject,
          });

          if (this.#state !== "pending") {
              this.#handleHandlers();
          }
      });
  }

  catch(onRejected) {
      return this.then(null, onRejected);
  }

  /*****
   * these resolve/reject are different from what we pass in executer
   * 
   * ***/

  static resolve(value) {
      if (value instanceof MyPromise) return value;

      return new MyPromise((resolve) => {
          resolve(value);
      });
  }

  static reject(reason) {
      return new MyPromise((_, reject) => {
          reject(reason);
      });
  }

  #handleHandlers() {
      queueMicrotask(() => {
          while (this.#handlers.length > 0) {
              const { onFulfilled, onRejected, resolve, reject } = this.#handlers.shift();

              try {
                  if (this.#state === "fulfilled") {
                      if (onFulfilled) {
                          const result = onFulfilled(this.#value);
                          resolve(result);
                      } else {
                          resolve(this.#value);
                      }
                  } else if (this.#state === "rejected") {
                      if (onRejected) {
                          const result = onRejected(this.#value);
                          resolve(result);
                      } else {
                          reject(this.#value);
                      }
                  }
              } catch (error) {
                  reject(error);
              }
          }
      });
  }



  static all(...promiseArray) {
      const result = []
      let completed = 0

      return new MyPromise((resolve, reject) => {
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

module.exports = { MyPromise }

const order = []
order.push(0)
const mp = new MyPromise((resolve, reject) => {
  order.push(1)
  resolve(1)
})
mp.then(() => {
  order.push(2)
})
  .then((data) => {
      order.push(3)
  })
order.push(4)
setTimeout(() => {
  console.log(order);
}, 50)