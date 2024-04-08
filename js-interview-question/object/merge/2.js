/**
 * spread operator , Object. assign does only shallow merge. now wr r writing deepMerge logic
 */

/**
 * example of shallow vs deep merge
 *  const x = { a: { a: 1 } }
    const y = { a: { b: 1 } }
    const z = { ...x, ...y }

    //deep merge
    { a: { a: 1, b: 1 } }
    //shallow merge
    { a: { b: 1 } }
 */

let merge = (...args) => {
  let target = {};
  let deep = false;
  let i = 0;

  if (typeof args[0] === "boolean") {
    deep = args[0];
    i++;
  }

  let merger = (obj) => {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (
          deep &&
          typeof target[prop] === "object" &&
          typeof obj[prop] === "object"
        ) {
          target[prop] = merge(true, target[prop], obj[prop]);
        } else {
          target[prop] = obj[prop];
        }
      }
    }
  };

  for (; i < args.length; i++) {
    merger(args[i]);
  }

  return target;
};

let obj1 = {
  name: "prashant",
  age: 23,
  nature: {
    helping: true,
    shy: false,
  },
};
let obj2 = {
  qualification: "BSC CS",
  loves: "Javascript",
  nature: {
    cloves: 1,
  },
};
console.log(merge(true, obj1, obj2));
