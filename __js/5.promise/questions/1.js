function asyncFunc() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("asyncFunc"); // 1
      resolve("result");
    }, 1000);
    // reject("error");
  });
}

asyncFunc()
  .then((result) => {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log(result);
        resolve("inner result"); // 3
      }, 1000);
      // reject("error");
    });
  })
  .then((d) => {
    console.log("outer", d); // 2
  })
  .then(() => console.log("hello"))
  .catch((error) => {
    console.log("error", error);
  });

/****
 *
 *
 *
 * **/

// response from api
// res.json()

// fetch('url').then((res)=>res.json()).then((data)=>put to state)

// res.json() as param to next then fn
// but its not , bcos its intelligent enough to run the return value
