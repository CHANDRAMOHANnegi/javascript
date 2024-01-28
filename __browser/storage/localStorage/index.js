// The main features of localStorage are:

// 1. !Shared between all tabs and windows from the same origin.
// 2. !The data does not expire. It remains after the browser restart and even OS reboot.

/***
 *
 *
 * **/

// 1. // works
// set key
localStorage.test = 2;

// 2. fails
let key = "length";
localStorage[key] = 5; //! Error, can't assign length

// There’s a storage event, it triggers when we modify the data.
