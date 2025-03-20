// func.apply(thisObj, argumentsArray);
//

Function.prototype.myApply = function (context, params) {
  context.func = this;
  context.func(...params);
};


Function.prototype.myApply = function (context, args) {
  /***
   * let currContext = this || globalThis
   * wrong, this is the function and context passed is the object
   * **/

  let currContext = context || globalThis

  const uniqueProp = Math.random() * Number.MAX_VALUE
  currContext[uniqueProp] = this // this is the function this "myCall" is called on

  const result = currContext[uniqueProp](...args) //! yaha to spread karna padega ! dhyan se, to function pass hua hai
  delete currContext[uniqueProp]
  return result
}

const obj = {
  type: "apply",
};

function print(msg) {
  console.log(this.type + " " + msg);
}

print.myApply(obj, ["hello"]);
