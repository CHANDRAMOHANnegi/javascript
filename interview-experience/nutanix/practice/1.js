class Calculator {
    constructor() {
      this._total = 0;
      this._queue = [];
      this._processing = false;
    }
  
    _add(num) {
      this._total += num;
      console.log(this._total);
    }
  
    _sub(num) {
      this._total -= num;
      console.log(this._total);
    }
  
    _mul(num) {
      this._total *= num;
      console.log(this._total);
    }
  
    _delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
  
    _processQueue() {
      if (this._processing) return;
      this._processing = true;
  
      const processNext = async () => {
        while (this._queue.length) {
          const { fn, args } = this._queue.shift();
          await fn(...args);
        }
        this._processing = false;
        console.log("Final result:", this._total);
      };
  
      processNext();
    }
  
    add(num) {
      this._queue.push({ fn: this._add.bind(this), args: [num] });
      this._processQueue();
      return this;
    }
  
    sub(num) {
      this._queue.push({ fn: this._sub.bind(this), args: [num] });
      this._processQueue();
      return this;
    }
  
    mul(num) {
      this._queue.push({ fn: this._mul.bind(this), args: [num] });
      this._processQueue();
      return this;
    }
  
    delay(ms) {
      this._queue.push({ fn: this._delay.bind(this), args: [ms] });
      this._processQueue();
      return this;
    }
  }
  
  const calc = new Calculator();
  calc.add(2).sub(4).mul(2).delay(2000).add(3);
  