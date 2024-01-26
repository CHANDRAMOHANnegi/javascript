Promise.myRace = (promises) => {
  return new Promise((res, rej) => {
    promises.forEach((prom, i) => {
      prom
        .then((val) => {
          res(val);
          return;
        })
        .catch((err) => {
          rej(err);
          return;
        });
    });
  });
};

const res = Promise.myRace([
  new Promise((res) =>
    setTimeout(() => {
      res("1");
    }, 1000)
  ),
  new Promise((res) => res("i win")),
]);

res.then((re) => console.log(re));
