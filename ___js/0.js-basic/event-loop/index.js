function task(message) {
  // emulate time consuming task
  let n = 1000000000;
  while (n > 0) {
    n--;
  }
  console.log(message);
}

console.log("Start script...");
task("Call an API");
console.log("Done!");
