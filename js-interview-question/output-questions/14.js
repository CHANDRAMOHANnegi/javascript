const sum = function (...num1) {
  if (num1.length > 1) {
    return num1.reduce((acc, ele) => acc + ele || 0, 0);
  } else {
    return (...num2) => {
      return (
        num1.reduce((acc, ele) => acc + ele || 0, 0) +
        num2.reduce((acc, ele) => acc + ele || 0, 0)
      );
    };
  }
};

console.log(sum(2, 3, 4)); // Outputs 5
console.log(sum(2)(3, 4)); // Outputs 5
