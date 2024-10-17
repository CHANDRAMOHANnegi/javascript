/*****
 * we are passing that variable to print in base case
 * what if we have to return it
 * ****/ 
function sumf(n, sum) {
  if (n < 0) {
    console.log("sum", sum);
    return;
  }
  sumf(n - 1, sum + n);
}

sumf(10, 0);
