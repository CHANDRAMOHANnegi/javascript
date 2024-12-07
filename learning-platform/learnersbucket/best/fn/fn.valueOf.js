const fn = () => { }

fn.valueOf = function () { return 10 }

console.log(5 + fn); // 15
