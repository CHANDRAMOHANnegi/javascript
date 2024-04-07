const o = {}; // Creates a new object

let bValue = 38;
Object.defineProperty(o, "b", {
  get() {
    return bValue;
  },
  set(newValue) {
    console.log("hello", newValue);
    bValue = newValue;
  },
  enumerable: true,
  configurable: true,
});

o.b; // 38

o.b = 20;
