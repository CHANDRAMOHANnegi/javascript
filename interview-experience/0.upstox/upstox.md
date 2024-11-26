setTimeout(() => console.log(1), 0);

console.log(2);

new Promise(res => {
console.log(3)
res();
}).then(() => console.log(4));

console.log(5);

// 2
// 3
// 4
// 5
// 1

////---

'use strict';
var x = 5;
var y = 5;

function Operations(op1 = x, op2 = y) {
this.x = op1;
this.y = op2;
};

Operations.prototype.sum = () => this.x + this.y;

const op = new Operations(10, 20);

console.log(op.sum()); // 30

///----

op ={
x: 10,
y : 20,
sum :() =>{}
}

function deepClone(obj){

// base check
if(obj === null || obj === undefined || typeof(obj) != 'object'){
return obj
}

if(Array.isArray(obj)){
const newVal = obj.map(ob=>)

}

let newObj = Object.assign(obj,{})

const keys = Object.keys(newObj)

for(let i = 0;i< keys.length; i++){
const key = keys[i]
let val = newObj[key]

if(typeof val === 'object'){

val = deepClone(val)

}else{

}
newObj[key] = val
}

return newObj

}

let obj1 = {a: {b:[ {c: 1, d: 10}]},e:{f:1}};
let obj2 = deepClone(obj1)

obj2.a.b[0].d = 2;
console.log(obj1.a.b[0].d) // 2
