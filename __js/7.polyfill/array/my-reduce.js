declare interface Array<T> {
  myReduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
  myReduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
  myReduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U
}

Array.prototype.myReduce = function (callback, initialValue) {

  if (typeof callback !== "function") {
    throw new Error(`${callback} is not a function`)
  }

  let val = initialValue
  let start = 0
  if (arguments.length === 1) {
    if (this.length === 0) {
      throw new Error(`Empty array without initial value isnot allowed`)
    }
    val = this[0]
    start = 1
  }

  for (let i = start; i < this.length; i++) {
    val = callback(val, this[i], i, this)
  }

  return val
}


/*****
 * 
 * if initial value is not passed, then initialize value with first num and start traversing with second index
 * 
 * if empty array with no initial value, then throw error
 * 
 * **/ 



/****
 * 
 * with initial value  
 * 
 * without initial value  
 * 
 * mixed type  
 * 
 * params should be passed  
 * 
 * empty array with initial value  
 * 
 * empty array without initial value  
 * 
 * initial value could be undefined  
 * 
 * initial value could be null  
 * 
 * ***/
