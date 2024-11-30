https://eishta.medium.com/javascript-tricky-questions-promises-12c1ebeff20c



1. Promise.allSettled()
What it does:
   1. Waits for all the promises in an array to either resolve or reject.
   2. Returns an array of objects describing the outcome of each promise, regardless of whether it was resolved or rejected.
Use case: When you need to know the result of all promises, even if some fail.


2. Promise.all()
What it does:
    1. Waits for all the promises in an array to resolve.
    2. If any promise rejects, it immediately rejects with that error, and the rest are ignored.
Use case: When you need all promises to succeed, or you can't proceed if one fails.


3. Promise.race()
What it does:
    1. Resolves or rejects as soon as the first promise in the array resolves or rejects.
Use case: When you're interested only in the first completed promise.
