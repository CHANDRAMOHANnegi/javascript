var length = 10;

function fn() {
    console.log(global.length, globalThis.length)
}

var obj = {
    length: 5,
    method: function (fn) {
        fn()
        arguments[0]()
    }
}

obj.method(fn, 1)