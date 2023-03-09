function asyncFunc() {
    console.log('asyncFunc');
    const blank = [];
    setTimeout(() => blank.push('DONE'), 100);
    console.log('asyncFunc timer end');
    return blank;
}
const blank = asyncFunc();
// Wait until the value has been filled in

console.log('outer', blank);

setTimeout(() => {
    const x = blank[0]; // (A)
    console.log('Result: ' + x);
}, 200);

