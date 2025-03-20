const Observable = require("./Observable")

const chatObservable = new Observable((subscriber) => {
    const messages = ["Hello!", "How are you?", "Goodbye!"];
    let index = 0;

    const intervalId = setInterval(() => {
        if (index < messages.length) {
            subscriber.next(messages[index]); // Emit each message
            index++;
        } else {
            subscriber.complete(); // Signal that no more messages will be received
            clearInterval(intervalId);
        }
    }, 2000);

    // Teardown logic
    return () => {
        console.log("Cleanup: Stopped receiving messages.");
        clearInterval(intervalId);
    };
});

const chatObserver = {
    next: (message) => console.log("New message:", message),
    complete: () => console.log("No more messages."),
};

chatObservable.subscribe(chatObserver);

