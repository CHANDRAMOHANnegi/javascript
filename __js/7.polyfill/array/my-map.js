

Array.prototype.myMap = function (fn, thisArg) {
  if (typeof fn != "function") throw new Error("Invalid argument")
  const length = this.length
  const result = new Array(length)

  for (let i = 0; i < length; i++) {
    if (i in this) {
      result[i] = fn.call(thisArg, this[i], i, this)
    }
  }

  return result
}


/****
 * 1. result array should be declared in starting
 * 2. empty items should not be calculated,
 * 3. pass proper (thisArg, this[i], i, this)
 * **/

/***
 * 
 * 
arguments should be passed  

this should be supported  

this should be tranformed to object  

empty indexes should be ignored  

mapped item count should be fixed at the beginning  

mapped items might be altered on the fly  

should throw if first argument is not function 
 * 
 * **/ 