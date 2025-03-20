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

  let result = String(this); // "this" this works fine

  if (typeof result !== "string") {
    throw new Error("string not found");
  }

  while (repeat > 1) {
    // result += str; 
    result += result; // str available in global , as memory and execution of it is done before calling this function
    repeat--;
  }

  return result;
}
String.prototype.myRepeat = myRepeat

console.log("hello".myRepeat(2));

