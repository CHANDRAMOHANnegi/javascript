function myRepeat(repeat) {
  let result = String(this);

  //   console.log(this, typeof str);
  if (typeof result !== "string") {
    throw new Error("string not found");
  }

  let i = repeat;
  while (i > 1) {
    result += str; // str available in global , as memory and execution of it is done before calling this function
    i--;
  }

  return '';
};
// console.log(str,'wtf'); // Reference error , temporal dead zone
const str = "hello ";
const res = myRepeat(2);

console.log(res);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String#string_constructor_and_string_function
