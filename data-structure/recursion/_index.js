function print(n) {
  if (n > 10) return;
  console.log(n);
  print(n + 1);
}

// print(0);

/**
 *
 *
 * **/

function printReverse(n) {
  if (n < 0) return;
  console.log(n);
  printReverse(n - 1);
}

// printReverse(10);

/**
 *
 *
 * **/

function print1(n) {
  if (n < 0) {
    // console.log(n);
    return;
  }
  print1(n - 1);
  console.log(n);
}

// print1(10);

/***
 * FIb
 * **/

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5));

// 0 1 1 2 3 5

// 0th fib is 0
// 1st fib is 1
// 2nd fib is 1
// 3rd fib is 2
// 4th fib is 3
// 5th fib is 5
