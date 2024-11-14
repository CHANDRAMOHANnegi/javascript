
const add = function (...args1) {
    let total = [...args1]
  
    const inner = (...args2) => {
      /**
       * here we need to collect all the args
       * **/
      total = [...total, ...args2]
      return inner
    }
  
    /***
     * we are adding values inside the valueOf function
     * **/
    inner.valueOf = function () {
      return total.reduce((all, val) => all + val, 0)
    }
  
    inner.value = inner.valueOf
  
    /***
     * one of the mistake i was doing 
     * i was adding this valueOf function from inside closure
     * **/
  
    return inner
  }
  
  console.log(add(1)(2).value() == 3);
  console.log(add(1, 2)(3).value() == 6);
  console.log(add(1)(2)(3).value() == 6);
  console.log(add(1)(2) + 3);
  