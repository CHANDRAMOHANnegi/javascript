```javascript

when is Promise.allSettled() rejected
The Promise.allSettled() method is never rejected. It differs from Promise.all() in that it waits for all promises in the array to either fulfill or reject, and then it returns a promise that resolves with an array of objects, each describing the outcome of each promise.

The result array contains objects with the following structure:

For fulfilled promises, the object has the form:
{ status: "fulfilled", value: <fulfilled value> }
For rejected promises, the object has the form:
{ status: "rejected", reason: <rejection reason> }
So, Promise.allSettled() always resolves, regardless of whether some or all of the promises were rejected.

```


```javascript

The Promise.race() method in JavaScript returns a promise that resolves or rejects as soon as one of the promises in the iterable passed to it resolves or rejects.

Behavior when a promise in Promise.race() fails:
If the first promise to settle is a rejection, then the Promise.race() will immediately return a rejected promise with that reason.
Other promises in the iterable are still executing, but their results are ignored once any one promise settles (either resolves or rejects).

```


```javascript

Promise.any() is a method that takes an iterable of promises and returns a single promise. 
It resolves as soon as any one of the promises in the iterable fulfills (i.e., successfully resolves). If none of the promises fulfill and all of them reject, Promise.any() returns a rejected promise with an AggregateError, which is a special error type that contains all the rejection reasons.

Key Points:
Promise.any() resolves with the value of the first fulfilled promise.
If all promises reject, Promise.any() rejects with an AggregateError that includes the rejection reasons from all the promises.

```

