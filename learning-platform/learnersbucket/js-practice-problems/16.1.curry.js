const curry = function () {
    let total = 0
    const sum = (num = 0) => {
        total += num
        return total
    }
    return sum
};

//Returns and store the inner function.
let sum = curry();

console.log(sum(5)); //5
console.log(sum(3)); //8
console.log(sum(4)); //12
console.log(sum(0)); //12
console.log(sum()); //12

/*****
 * params, initial
 * 
 * return
 * ****/ 