console.log(0 == undefined) //false
console.log(0 == null) //false

console.log(false == undefined) //false
console.log(false == null) //false

console.log("" == undefined) //false
console.log("" == null) //false


console.log(false == 0) //true
console.log("" == false) //true
console.log(0 == "") //true


console.log(0 === undefined); // false
console.log(0 === false); // false
console.log(0 === null); // false

console.log("" === undefined); // false
console.log("" === false); // false
console.log("" === null); // false


console.log(null == undefined); // true
