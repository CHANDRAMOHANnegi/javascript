// func.call(thisObj, args1, args2, ...)

Function.prototype.myCall = function (context, ...params) {
  context.func = this;
  context.func(...params);
};
/***
 * the issue with current implementation is 
 * if obj already have a function named "func"
 * 
 * ***/

Function.prototype.myCall = function (context, ...args) {
  /***
   * let currContext = this || globalThis
   * wrong, this is the function and context passed is the object
   * **/

  let currContext = context || globalThis

  const uniqueProp = Math.random() * Number.MAX_VALUE
  currContext[uniqueProp] = this // this is the function this "myCall" is called on

  const result = currContext[uniqueProp](...args)
  delete currContext[uniqueProp]
  return result
}

const obj = {
  type: "call",
};

function print(msg) {
  console.log(this.type + " " + msg);
}

print.myCall(obj, ["hello"]);
