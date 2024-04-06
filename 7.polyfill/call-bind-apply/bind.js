// func.bind(thisObj, args1, args2, ...)

Function.prototype.myBind = function (context, ...params) {
  context.func = this;
  return function (...args) {
    context.func(...params, ...args);
  };
};

const obj = {
  type: "bind",
};

function print(msg) {
  console.log(this.type + " " + msg);
}

print.myBind(obj, "hello")();
