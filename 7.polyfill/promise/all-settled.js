Promise.allSettled = (promises) => {
  let len = promises.length;
  return new Promise((res, rej) => {
    const result = [];
    promises.forEach((prom, i) => {
      //   console.log(prom instanceof Promise);
      prom
        .then((val) => {
          result[i] = { value: val, status: "fulfilled" };
          len--;
          if (len === 0) {
            res(result);
          }
        })
        .catch((err) => {
          result[i] = { status: "rejected", reason: err };
          len--;

          /**
           * key take-away is that
           *
           * we do not have to call reject, we just have to call resolve,
           * either it is rejected or resolved
           *
           * */

          if (len === 0) {
            res(result);
          }
        });
    });
  });
};

const res = Promise.allSettled([
  new Promise((res) =>
    setTimeout(() => {
      res("1");
    }, 1000)
  ),
  new Promise((res, rej) => rej("hello")),
]);

res.then((re) => console.log(re));
