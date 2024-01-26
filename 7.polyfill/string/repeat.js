String.prototype.myRepeat = function (repeat) {
  let result = String(this);

  //   console.log(this, typeof str);
  if (typeof result !== "string") {
    throw new Error("string not found");
  }

  let i = repeat;

  while (i > 1) {
    result += str;
    i--;
  }

  return result;
};

const str = "hello ";
const res = str.myRepeat(1);

console.log(res);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String#string_constructor_and_string_function
