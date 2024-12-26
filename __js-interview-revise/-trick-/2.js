function customIsArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}