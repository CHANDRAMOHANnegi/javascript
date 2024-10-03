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
      res("I won but lost the race");
    }, 1000)
  ),
  new Promise((res, rej) => rej("i lost but won the race")),
]);

res.then((re) => console.log(re)).catch((e) => console.log(e));
