function printReverse(n) {
    if (n < 0) return;
    console.log(n);
    printReverse(n - 1);
  }
  
  printReverse(10);
  