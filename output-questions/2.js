var v1={}

v2={key:"v2"}
v3={key:"v3"}

v1[v2]=4056
v1[v3]=9075
v1[{}]=1

console.log('====================================');
console.log(v1[v2]);// 1
console.log(v1[v3]);// 1
console.log(v1[{}]);// 1
console.log('====================================');