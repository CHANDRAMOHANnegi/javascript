function print(n) {
    if (n > 10) return;
    console.log(n);
    print(n + 1);
  }
  
  print(0);