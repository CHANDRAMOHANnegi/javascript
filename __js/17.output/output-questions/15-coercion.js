// objects NEVER get coerced. Coercion is the process of forcing one type of primitive value to another type of primitive value.
// If an object needs to ‘coerced’, Javascript will first attempt to get a primitive value for the object, and then coerce that primitive value if needed.

console.log([] == 0); // true
console.log(0 == "0"); // true
console.log([] == "0"); // false!

// if your expression is +value it will always coerce to a number
// if your expression is anything + string it will always coerce ‘anything’ to a string and concatenate them

/**
 *
 * That is, + is treated as an explicit coercion to a number if it’s used on a single value,
 * a concatenation operation if it’s used on two values and either one is a string, otherwise it’s numeric addition.
 *
 **/


// unary ho to number
// binary ho to string
console.log(+[]); // 0
console.log(1 + []); // '1'


console.log(+[4]); // 4
console.log(+[]); // 0
console.log(1 + []); // '1'
console.log(+[4, 4]); // NaN
console.log(+true); // 1

console.log(+[{}]); // NaN
console.log(+[""]); // 0



// 
console.log([] + {}); // "[object Object]"
console.log({} + []); // 0 // here {} is treated as empty code block, which does nothing



console.log(+ {}); // NaN
console.log(+ []); // 0


console.log(1 + {}); // '1[object Object]'
console.log({} + "1"); // 1
console.log({} + "");  // 0
console.log({} + "a");  // Nan // empty + "a" is not a number