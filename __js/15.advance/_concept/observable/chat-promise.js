function createChatPromise(messages, interval) {
    return new Promise((resolve) => {
        let index = 0;

        const emitMessages = () => {
            if (index < messages.length) {
                console.log("New message:", messages[index]); // Log each message
                index++;
                setTimeout(emitMessages, interval); // Schedule the next message
            } else {
                console.log("No more messages."); // When messages are done
                resolve("All messages sent."); // Resolve the Promise
            }
        };

        emitMessages(); // Start emitting messages
    });
}

const messages = ["Hello!", "How are you?", "Goodbye!"];
const interval = 2000; // Emit every 2 seconds

createChatPromise(messages, interval)
    .then((result) => console.log(result)) // Log when the Promise resolves
    .catch((err) => console.error(err)); // Catch any errors