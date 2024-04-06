// func.apply(thisObj, argumentsArray);
//

Function.prototype.myApply = function (context, params) {
  context.func = this;
  context.func(...params);
};

const obj = {
  type: "apply",
};

function print(msg) {
  console.log(this.type + " " + msg);
}

print.myApply(obj, ["hello"]);
