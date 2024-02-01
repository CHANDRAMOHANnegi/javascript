function sumf(n, sum) {
  if (n < 0) {
    console.log("sum", sum);
    return;
  }
  sumf(n - 1, sum + n);
}

sumf(10, 0);
