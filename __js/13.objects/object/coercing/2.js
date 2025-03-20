
var obj = {
    valueOf: function () {
        console.log("valueOf");
        return '0';
    },
    toString: function () {
        console.log("toString");
        return 1;
    }
};

console.log(+obj);
console.log(+obj);
console.log(!!obj);
console.log(+obj);

