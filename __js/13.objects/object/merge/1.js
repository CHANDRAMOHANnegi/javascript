function customMerge(target, source) {
  let merged = { ...source };

  for (const key in target) {
    if (Object.hasOwnProperty.call(target, key)) {
      merged[key] =
        source[key]?.toString() === "[object Object]"
          ? customMerge(source[key], target[key])
          : target[key];
    }
  }

  return merged;
}

// const obj1 = {
//   name: "prashant",
//   age: 23,
//   nature: {
//     helping: true,
//     shy: false,
//   },
// };
// const obj2 = {
//   qualification: "BSC CS",
//   loves: "Javascript",
//   nature: {
//     cloves: 1,
//   },
// };

// const obj1 = { a: [1, 2], b: { c: 3 }, c: 1 };
// const obj2 = { a: [3, 4], b: { d: 4 } };

const obj1 = { a: 1, nested: { x: 2 } };
const obj2 = { b: 3, nested: { y: 4 } };

const mergedObject = customMerge(obj1, obj2);

console.log(mergedObject);
