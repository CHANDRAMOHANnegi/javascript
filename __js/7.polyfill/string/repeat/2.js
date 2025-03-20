if (!String.prototype.rrepeat) {
  // if there's no such method
  // add it to the prototype

  String.prototype.rrepeat = function (n) {
    // repeat the string n times

    // actually, the code should be a little bit more complex than that
    // (the full algorithm is in the specification)
    // but even an imperfect polyfill is often considered good enough
    return new Array(n + 1).join(this);
  };
}

console.log("cm".rrepeat(5));
