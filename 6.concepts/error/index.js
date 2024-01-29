const o = {}; // Creates a new object

// You cannot try to mix both:
Object.defineProperty(o, "conflict", {
  value: 0x9f91102,
  get() {
    return 0xdeadbeef;
  },
});
// throws a TypeError: value appears
// only in data descriptors,
// get appears only in accessor descriptors

//  Uncaught TypeError: Invalid property descriptor. Cannot both specify accessors and a value or writable attribute, #<Object>
//    at Function.defineProperty (<anonymous>)
//    at <anonymous>:4:18
