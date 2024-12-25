// Error Type	Description	Example
// SyntaxError	Invalid syntax	let x = 10 (missing semicolon)
// ReferenceError	Accessing a variable that doesn’t exist	console.log(nonExistentVar)
// TypeError	Invalid type or method invocation on a non-compatible type	num.toUpperCase() (on a number)
// RangeError	Value out of range	let arr = new Array(-1)
// EvalError	Issues related to the eval() function	eval('alert("Hello"');
// URIError	Invalid URI handling (e.g., malformed URI)	decodeURIComponent('%');
// InternalError	Internal engine errors, like stack overflows	function recurse() { recurse(); }
// AggregateError	Multiple errors in Promise.any()	Multiple promise rejections
// CustomError	User-defined error type	throw new CustomError('Something went wrong')


