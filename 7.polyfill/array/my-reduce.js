Array.prototype.myReduce = function (callback, defaultValue) {
  const array = this;
  const length = array.length;
  let result = defaultValue;
  for (let i = 0; i < length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};

const ans = [1, 2, 3].myReduce((sum, ele) => sum + ele, 0);
console.log(ans);


//Without sending Initial Value
Array.prototype.myReduce2 = function(cb,initialValue){
	let array = this;
  let acc;
  if(!array.length)
  return "Empty Array returns undefined";
  if(initialValue)
  acc = initialValue;
  else
  acc = array[0];
  for(i=(initialValue ? 0 : 1);i<array.length;i++){
  	acc = cb(acc,array[i],i,array)
  }
  return acc;
}
let x = [1,2,3,4,5];

console.log(x.myReduce2((acc,curr)=>acc+curr))
console.log(x.myReduce2((acc,curr)=>acc+curr,0))
console.log([].myReduce2((acc,curr)=>acc+curr,0))