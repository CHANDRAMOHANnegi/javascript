const obj = {}; // Creates a new object

let bValue = 38;
Object.defineProperty(obj, "b", {
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

obj.b; // 38
console.log(obj.b);
obj.b = 20;
console.log(obj.b);

