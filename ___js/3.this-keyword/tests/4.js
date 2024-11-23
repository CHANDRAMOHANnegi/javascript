var length = 10;

function fn() {
  console.log(this.length, global?.length, globalThis?.length);
}

const arr = { 0: fn, 1: 1, 2: "cm", length: 14 };

var obj = {
  length: 5,
  method: function (fn) {
    fn();
    console.log('---', arguments);
    /***
      const arguments = {
        '0': [Function: fn],
        '1': 1
      } 
        so this will refer to argument(arguments is array like object) object, and its length is length of properties
    **/
    arguments[0]()
  },
};

obj.method(fn, 1);
