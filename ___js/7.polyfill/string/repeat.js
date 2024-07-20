function myRepeat(repeat) {
  /**
   * key take-away:
   *
   * here type-of "this" keyword is "object" and not "string"
   * so we wrap "this" keyword with String
   *
   *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String#string_constructor_and_string_function
   *
   * **/

  let result = String(this);

  //   console.log(this, typeof str);
  if (typeof result !== "string") {
    throw new Error("string not found");
  }

  let i = repeat;
  while (i > 1) {
    result += str; // str available in global , as memory and execution of it is done before calling this function
    // result += result; // str available in global , as memory and execution of it is done before calling this function
    i--;
  }

  return "";
}
// console.log(str,'wtf'); // Reference error , temporal dead zone
// const str = "hello ";
// const res = myRepeat(2);

// console.log(res);

if (!String.prototype.repeat) {
  // if there's no such method
  // add it to the prototype

  String.prototype.repeat = function (n) {
    // repeat the string n times

    // actually, the code should be a little bit more complex than that
    // (the full algorithm is in the specification)
    // but even an imperfect polyfill is often considered good enough
    return new Array(n + 1).join(this);
  };
}

console.log("cm".repeat(5));
