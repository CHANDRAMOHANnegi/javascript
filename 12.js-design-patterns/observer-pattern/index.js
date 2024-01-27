class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    this.observers.push(func);
  }

  unsubscribe(func) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

const IntersectionObserv = class {
  constructor(fn, options) {
    this.cb = fn;
    this.options = options;
    this.observers = [];
  }

  subscribe(fn) {
    const idx = this.observers.length;
    this.observers.push(fn);

    return () => {
      this.observers.splice(idx, 1);
    };
  }

  observer(node) {
    this.observers.forEach((fn) => fn(node));
  }
};

const observer = new IntersectionObserv(() => {}, { threshold: 0.5 });
