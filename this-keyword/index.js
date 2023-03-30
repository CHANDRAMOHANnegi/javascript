function Person() {
    // The Person() constructor defines `this` as itself.
    this.age = 0;
  
    setInterval(function growUp() {
      // In nonstrict mode, the growUp() function defines `this`
      // as the global object, which is different from the `this`
      // defined by the Person() constructor.
      this.age++;
    }, 1000);
  }
  
  const p = new Person();
  console.log(p);