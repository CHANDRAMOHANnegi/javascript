let obj = {
  i: 0,
};

obj = new Proxy(obj, {
  get: (target, path, receiver) => {
    target[path] = target[path] + 1
    return target[path]
  }
})

// modify the object so that it can return the following output
// your code goes here

console.log(obj.i); // 1
console.log(obj.i); // 2
console.log(obj.i); // 3