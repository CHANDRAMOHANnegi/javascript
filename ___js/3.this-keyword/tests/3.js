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

// const arrowDec = counter.decrease.call(obj);
// arrowDec(5);
// arrowDec(6);


const print = (t, cb) => {
  console.log(t, this);
  cb();
};

print("hello ", counter.increase);
