
const sum = (...args1) => {
  let total = args1.reduce((all, val) => all + val, 0)

  const inner = (...args) => {
    if (!args.length) {
      return total
    }
    total += args.reduce((all, val) => all + val, 0)
    return inner
  }

  return args1.length===0 ?0: inner
}


const res = sum(1, 2, 3, 4)();
const res2 = sum(1)(2)(3)(4)();
const res3 = sum(1, 2)(3, 4)();
const res4 = sum(1, 2, 3)(4)();
const res5 = sum(1)(2, 3, 4)();
const res6 = sum();

console.log(res, res2, res3, res4, res5, res6);

// Output:
// 10 10 10 10 10 0


