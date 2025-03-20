var v1 = {}

v2 = { key: "v2" }
v3 = { key: "v3" }

v1[v2] = 4056
v1[v3] = 9075
v1[{}] = 1

console.log('====================================', v1);
console.log(v1[v2]);// 1
console.log(v1[v3]);// 1
console.log(v1[{}]);// 1
console.log('====================================', v1);

// var v1 = { name: "cm" }
// v2 = { key: "v2" }
// v1[v2] = 1

console.log(v1);

/** OUTPUT **/ 

// ==================================== { '[object Object]': 1 }
// 1
// 1
// 1
// ==================================== { '[object Object]': 1 }
// { '[object Object]': 1 }