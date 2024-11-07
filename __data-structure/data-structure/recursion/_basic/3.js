function print1(n) {
    if (n < 0) {
      // console.log(n);
      return;
    }
    print1(n - 1);
    console.log(n);
  }
  