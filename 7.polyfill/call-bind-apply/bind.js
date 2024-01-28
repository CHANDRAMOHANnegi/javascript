function myBind(ref) {
  ref.func = this;

  return function (...params) {
    ref.func(...params);
  };
}
