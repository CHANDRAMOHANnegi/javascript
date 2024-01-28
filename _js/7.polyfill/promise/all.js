Promise.myAll = (promises) => {
  let len = promises.length;
  return new Promise((res, rej) => {
    const result = [];
    promises.forEach((prom, i) => {
      //   console.log(prom instanceof Promise);
      prom
        .then((val) => {
          result[i] = val;
          len--;
          if (len === 0) {
            res(result);
          }
        })
        .catch((err) => {
          rej(err);
          return;
        });
    });
  });
};

const res = Promise.myAll([
  new Promise((res) =>
    setTimeout(() => {
      res("1");
    }, 1000)
  ),
  new Promise((res) => res('2')),
]);

res.then((re) => console.log(re));
