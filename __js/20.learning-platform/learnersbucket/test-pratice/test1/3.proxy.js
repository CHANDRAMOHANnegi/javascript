let obj = {
    i: 0
}

obj = new Proxy(obj, {
    get: (target, path) => {
        target[path] = target[path] + 1
        return Reflect.get(target,path)
    }
})

console.log(obj.i); // 1
console.log(obj.i); // 2
console.log(obj.i); // 3