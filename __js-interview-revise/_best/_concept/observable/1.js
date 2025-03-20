const Observable = require("./Observable")

const observable = new Observable((subscriber) => {
    let counter = 0;

    // Emit values every second
    const intervalId = setInterval(() => {
        subscriber.next(counter++);
        if (counter === 3) {
            subscriber.complete(); // Complete when counter reaches 3
            clearInterval(intervalId); // Cleanup
        }
    }, 1000);

    // Teardown logic to stop the interval
    return () => {
        console.log("Cleanup: Stopped emitting.");
        clearInterval(intervalId);
    };
})

const observer = { // {subscriber}
    next: (val) => console.log("next-", { val }),
    error: (val) => console.log("error-", { val }),
    complete: (val) => console.log("complete-", { val }),
}
observable.subscribe(observer)

