function getThis() {
  console.log(this);
}

const obj = {
  name: "cm",
  age: 26,
  increase: function () {
    this.age++;
    // console.log("this1", this);

    ((params) => {
      //   console.log(age);
      var age = 10;
      console.log(age, this.age);

      //   console.log("this2", this);
    })();

    // console.log(age, this.age);
    return this.age;
  },
};

// const myBind = getThis.bind(obj)

console.log(obj.increase());

// myBind()

// console.log(x, y);
// var x = 10;
// y = 20;

{
}

func;
