(function () {
    var a = 1;
    (new Function('a = 2'))();
    console.log('a1:', a)
})();

console.log('a2:', a)
