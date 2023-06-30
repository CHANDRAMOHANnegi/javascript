var length = 10;

function fn() {
    console.log(this.length, global.length, globalThis.length)
}

const arr = { "0": fn, "1": 1, "2": "cm", length: 14 }

var obj = {
    length: 5,
    method: function (fn) {
        fn()
        // console.log('---', arguments);
        // arguments[0]()
    }
}

obj.method(arr[0], 1)