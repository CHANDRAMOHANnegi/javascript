const parse = (str, markups) => {

}

const encoded = parse('Hello, World', [[0, 2, "i"], [7, 10, "u"], [4, 9, "b"], [2, 7, "i"], [7, 9, "u"]]);
console.log(encoded);

//Output:
//"<i>He<i>l</i></i><i>l<b>o, <u><u>W</u></u></b></i><b><u><u>or</u></u></b><u>l</u>d"
