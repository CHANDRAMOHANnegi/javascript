function fn() {
  (() => {
    let counter = this.counter || 0;
    counter++;
    if (counter % 3 === 0) {
      console.log("hello counter", counter);
    } else {
      console.log("hi", counter);
    }
    this.counter = counter;
  })();
}

fn();
fn();
fn();
fn();
fn();
fn();
fn();
