class Observable {
    constructor(setup) {
        this.setup = setup
    }

    subscribe(subscriber) {
        const originalNext = typeof subscriber === "function" ? subscriber : subscriber.next
        const originalError = subscriber.error
        const originalComplete = subscriber.complete

        let isUnsubscribed = false

        subscriber.next = (value) => {
            if (isUnsubscribed) {
                return
            }
            if (typeof originalNext === "function") {
                originalNext(value)
            }
        }

        subscriber.error = (value) => {
            if (isUnsubscribed) {
                return
            }
            isUnsubscribed = true
            if (typeof originalError === "function") {
                originalError(value)
            }
        }

        subscriber.complete = (value) => {
            if (isUnsubscribed) {
                return
            }
            if (typeof originalComplete === "function") {
                originalComplete(value)
            }
        }
        this.setup(subscriber)
        return {
            unsubscribe: () => {
                isUnsubscribed = true
            }
        }

    }
}


module.exports = { Observable }