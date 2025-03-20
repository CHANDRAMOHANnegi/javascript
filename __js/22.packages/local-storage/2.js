// function LocalStorage() {}

class LocalStorage {
  #cache = undefined;

  getItem(key) {
    if (this.#cache) {
      return this.#cache[key];
    }
  }

  setItem() {
    if (this.#cache) {
      this.#cache[key] = value;
    }
  }

  removeItem(key) {
    if (this.#cache) {
      delete this.#cache[key];
    }
  }

  clear() {
    this.#cache = undefined;
  }
}

let localStorage = new LocalStorage();

localStorage = new Proxy(localStorage, {
  get(target, prop, receiver) {
    let value = Reflect.get(...arguments);
    return typeof value == "function" ? value.bind(target) : value;
  },
  set(target, phrase, newValue) {
    // console.log(target, phrase);
    // console.log(...arguments);
    // Reflect.set(target, phrase, newValue);
    Reflect.set(...arguments);
    // target[phrase] = newValue;
  },
});

localStorage.setItem("count", 1);
localStorage.getItem();

localStorage.test = 2;

console.log(Object.keys(localStorage));
