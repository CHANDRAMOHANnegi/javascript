function getThis() {
  console.log(this);
}

const obj = {
  name: "cm",
  age: 26,
  increase: function () {
    this.age++;

    (function (params) {
      //   console.log(age);
      var age = 10;
      console.log(age, this);
      /**
       * this here belongs to global
       * **/
    })();

    return this.age;
  },
};

console.log(obj.increase());