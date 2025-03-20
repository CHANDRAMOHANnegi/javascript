function storage() {}

let localStorage = (() => {
  const cache = {};

  return {
    setItem: (key, value) => {
      cache[key] = value;
    },
    getItem: (key) => {
      return cache[key];
    },
    removeItem: (key) => {},
    clear: () => {},
    key: (index) => {},
    length: 1,
  };
})();

localStorage = new Proxy(localStorage, {
  set(target, phrase, newValue) {
    // console.log(target, phrase);
    target[phrase] = newValue;
  },
});

localStorage.setItem("count", 1);
localStorage.getItem();

localStorage.test = 2;

console.log(Object.keys(localStorage));
