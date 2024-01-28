let obj = {
  a: 10,
  vir: function () {
    x();
    console.log(this.a);
    function x() {
      console.log(this.a);
    }
  },
};
obj.vir();
