/**
 * Read FAQs section on the left for more information on how to use the editor
**/
// DO NOT CHANGE THE FUNCTION NAME
function customFilter(callbackFn, thisArg) {

    /******
     * this is how we take care of error
     * 
     * ***/ 
    if(!callbackFn || (typeof callbackFn !== "function")){
      throw new TypeError(`${callbackFn} is not a function`)
    }
    // DO NOT REMOVE
    'use strict';
    const array = this
  
    const result = []
    for (let index = 0; index < array.length; index++) {
      if (callbackFn.call(thisArg,array[index],index,array)) {
        result.push(array[index])
      }
    }
    return result
  }
  
  // DO NOT CHANGE
  Array.prototype.customFilter = customFilter;
  