var memoized = function (foo) {
  var cache = {};
  return function (...args) {
    var argId = args.toString();
    if (cache[argId]) {
      return cache[argId];
    } else {
      var value = foo(...args);
      cache[argId] = value;
      return value;
    }
  };
};

var factorial = function (n) {
  if (n <= 1) {
    return 1;
  } else {
    console.log("in", n);
    return n * factorial(n - 1);
  }
};

var factorial = memoized(factorial);
console.log(factorial(5));
console.log(factorial(6));
