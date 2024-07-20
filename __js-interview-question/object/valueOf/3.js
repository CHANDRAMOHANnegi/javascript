function sum() {

}

sum.valueOf = function () {
    return 10
}

console.log(sum + 5);


/***
 * When javascript wants to turn an object into primitive value
 * it uses the valueOf method
 * 
 * Javascript automatically calls the function valueOf() method
 * when it comes across object where primitive value is anticipated
 * */ 