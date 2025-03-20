let obj = {
    a: 1,
    b: 2,
    c: {
        age: 30
    }
};

var objClone = Object.assign({},obj);

// console.log('objClone: ', objClone);

obj.c.age = 45;
// const c = obj.c// = 45;
// c.age=45

console.log('After Change - obj: ', obj);  // 45 - This also changes
console.log('After Change - objClone: ', objClone); // 45
