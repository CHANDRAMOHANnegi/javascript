function memoize(func) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }

    const value = func.apply(this, args);
    cache[key] = value;
    return value;
  };
}

function add(...args) {
  console.log("add");
  return args.reduce((sum, arg) => sum + arg, 0);
}

const addMemoized = memoize(add);

console.log(addMemoized(2, 3));
console.log(addMemoized(2, 3));
console.log(addMemoized(2, 3));
