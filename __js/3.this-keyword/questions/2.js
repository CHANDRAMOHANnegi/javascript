function getThis() {
  console.log(this);
}

const obj = {
  name: "cm",
  age: 26,
  increase: function () {
    this.age++;
    // console.log("this1", this);

    (function(params){
      //   console.log(age);
      var age = 10;
      console.log(age, this);

      //   console.log("this2", this);
    })();

    // console.log(age, this.age);
    return this.age;
  },
};


// console.log(obj.increase());

const { increase } = obj
console.log(increase());

// const myBind = getThis.bind(obj)
// myBind()
