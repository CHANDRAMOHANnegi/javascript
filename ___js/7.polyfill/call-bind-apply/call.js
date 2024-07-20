// func.call(thisObj, args1, args2, ...)

Function.prototype.myCall = function (context, ...params) {
  context.func = this;
  context.func(...params);
};

const obj = {
  type: "call",
};

function print(msg) {
  console.log(this.type + " " + msg);
}

print.myCall(obj, ["hello"]);
