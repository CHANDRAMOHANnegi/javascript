//   typeof []  'object'
//   typeof {}  'object'
//   typeof undefined 'undefined'
//   typeof null 'null'
//   typeof 1 'number'
//   typeof 'a' 'string'
//   typeof someFunc 'Function'

// we have to handle
// 1. if not an object
// 2. arrays
// 3. functions

function deepCopy(obj) {
  // null, undefined, function, not an object
  // If the object is null, undefined, or not an object, or function return it
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // If the object is an array, recursively copy each element
  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }

  // Declare object which will store the output
  const result = {};

  // Store the keys of the object
  const keys = Object.keys(obj);

  // Iterate through the keys of the object retrieved above
  for (let key of keys) {
    // Recursively iterate through each key.
    result[key] = deepCopy(obj[key]);
  }
  return result;
}

var obj = {
  a: "hello",
  c: "test",
  po: 33,
  arr: [1, 2, 3, 4],
  anotherObj: { a: 33, str: "whazzup" },
  func: () => {},
};

var obj2 = obj;
var obj3 = deepCopy(obj);

obj2.anotherObj.a = "hello";

console.log(obj);
console.log(obj2);
console.log(obj3);
