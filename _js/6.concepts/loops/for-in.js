const originalArray = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];

const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
fruits.hasOwnProperty(3); // true ('Orange')
fruits.hasOwnProperty(4); // false - not defined

console.log(Object.hasOwnProperty.call(originalArray, 1));

for (const key in originalArray) {
//   console.log(key);
  if (Object.hasOwnProperty.call(originalArray, key)) {
    const element = originalArray[key];
    originalArray;
  }
}
