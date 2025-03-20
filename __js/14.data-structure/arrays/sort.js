// Sorts an array in place.
// This method mutates the array and returns a reference to the same array.

const nums = [,undefined,80,undefined,9];
nums.sort();
console.log(nums);//Array [80, 9, undefined, undefined,empty]

//  All undefined elements are sorted to the end of the array
// empty are moved to end fo array

// If compareFn is not supplied, all non-undefined array elements are sorted by 
// converting them to strings and comparing strings in UTF-16 code units order.

//  In a numeric sort, 9 comes before 80, but because numbers are converted to strings, 
//    "80" comes before "9" in the Unicode order.


