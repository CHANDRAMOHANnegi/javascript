

console.log(x); // undefined and not reference-error
{
  console.log(x); // undefined
  var x = 1;
}
console.log(x); // 1


/******
 * Block scope vs function scope
 * ******/ 