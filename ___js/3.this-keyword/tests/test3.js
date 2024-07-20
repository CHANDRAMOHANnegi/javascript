function getThis() {
  console.log(this);
}

const counter = {
  name: "cm",
  count: 0,
  getThis,
  decrease: function () {
    console.log("decrease", this);
    let x = 0;
    const context = this;
    const arrow = (num) => {
      x++;
      context.num = num;
      getThis();
      console.log("arrow decrease : ", x, this, context);
    };
    return arrow;
  },
  increase: () => {
    console.log("increase", this);
    // console.log(this.count);
    // this.count++;
    const arrow = () => {
      console.log("arrow increase : ", this);
    };
    return arrow;
    // console.log(this.count);
  },
};

const obj = { name: "obj", count: 5 };

// counter.getThis();

// counter.increase.call(obj); // ()
// const arrowIn = counter.increase(); //.call(obj);
// arrowIn();
const arrowDec = counter.decrease(); //.call(obj);
arrowDec(5);
// arrowDec(6);
// counter.increase();
// counter.increase()
// console.log(counter);

// const print = (t, cb) => {
//   console.log(t, this);
//   cb();
// };

// print("hello ", counter.increase);

// function inc() {
//   console.log("inc", this);
//   let x = 0;
//   function arrow() {
//     x++;
//     console.log("arrow inc : ", x, this);
//   }
//   return arrow;
// }

// const i = inc();

// i(); // 1
// i(); // 2
