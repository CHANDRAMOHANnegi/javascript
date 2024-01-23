let testThis = {
  x: 12,
  y: 20,
  add({ a, b, c }) {
    let d = a + b + c();
    console.log(d);
  },
  test() {
    //the result is NaN
    this.add({
      a: this.x,
      b: this.y,
      c: () => {
        //this here is testThis, NOT the object literal here
        return this.a + this.b;
      },
    });
  },
  test2() {
    //64 as expected
    this.add({
      a: this.x,
      b: this.y,
      c: () => {
        return this.x + this.y;
      },
    });
  },
  test3() {
    //NaN
    this.add({
      a: this.x,
      b: this.y,
      c: function () {
        //this here is the global object
        return this.x + this.y;
      },
    });
  },
};
