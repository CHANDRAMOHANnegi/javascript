function compose(...fns) {
  return (input) => {
    return fns.reduceRight((acc, fn) => fn(acc), input);
  };
}

function pipe(...fns) {
  return (input) => {
    return fns.reduce((acc, fn) => fn(acc), input);
  };
}

const add = (a, b) => a + b;
const add3 = (a) => a + 3;

const multiply = (a, b) => a * b;
const double = (a) => a * 2;

const resCom = compose(double, add3)(2);
const resPip = pipe(double, add3)(2);

console.log(resCom, resPip); //
