function customReverse() {
    // DO NOT REMOVE
    'use strict';
  
    if (this === null || this === undefined) {
      throw new TypeError('Array.prototype.customReverse called on null or undefined');
    }
  
    const list = Object(this);
    const length = list.length ?? 0; // Ensure length is a non-negative integer
  
    for (let i = 0; i < Math.floor(length / 2); i++) {
      const j = length - 1 - i;
  
      const lowerExists = i in list;
      const upperExists = j in list;
  
      if (lowerExists && upperExists) {
        // Swap elements
        [list[i], list[j]] = [list[j], list[i]];
      } else if (lowerExists) {
        // Move lower to upper
        list[j] = list[i];
        delete list[i];
      } else if (upperExists) {
        // Move upper to lower
        list[i] = list[j];
        delete list[j];
      }
    }
  
    return list;
  }
  
  Array.prototype.customReverse = customReverse;

  /****
   * reverse array-like object
   * **/ 