var variable = 10;
(() => {
  console.log(variable);
  let variable = 20;
  console.log(variable);
})();

// reference error