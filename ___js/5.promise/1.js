// enum of states
const states = {
  PENDING: 0,
  FULFILLED: 1,
  REJECTED: 2,
};

class MyPromise {
  // initialize the promise
  constructor(callback) {
    this.state = states.PENDING;
    this.value = undefined;
    this.handlers = [];

    try {
      callback(this._resolve, this._reject);
    } catch (error) {
      this._reject(error);
    }
  }

  // helper function for resolve
  _resolve = (value) => {
    this._handleUpdate(states.FULFILLED, value);
  };

  // helper function for reject
  _reject = (value) => {
    this._handleUpdate(states.REJECTED, value);
  };

  then = (onSuccess, onFailure) => {
    this.handlers.push(handler);

    return;
  };
}
