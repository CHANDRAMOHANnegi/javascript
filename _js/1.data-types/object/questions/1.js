let obj = {
    a: 1,
    b: 2,
    c: {
        age: 30
    }
};

var objclone = Object.assign({},obj);

console.log('objclone: ', objclone);

obj.c.age = 45;

console.log('After Change - obj: ', obj);  // 45 - This also changes
console.log('After Change - objclone: ', objclone); // 45