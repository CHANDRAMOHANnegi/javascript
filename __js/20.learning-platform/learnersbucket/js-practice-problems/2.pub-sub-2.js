function Events() {

    this.subscriptionList = {}
    this.subscribeOnceList = new Map()
    this.subscribeOnceAsyncList = new Map()

    this.subscribe = function (name, callback) {
        if (name in this.subscriptionList) {
            this.subscriptionList[name].push(callback)
        } else {
            this.subscriptionList[name] = [callback]
        }

        return {
            remove: () => {
                const subscriptionList = this.subscriptionList?.[name]
                const newListeners = subscriptionList.splice(subscriptionList.length - 1, 1)
                this.subscriptionList[name] = newListeners
            }
        }
    };

    this.subscribeOnce = function (name, callback) {
        if (!this.subscribeOnceList.has(name)) {
            this.subscribeOnceList.set(name, callback)
        } else {
            const currCallbacks = [...this.subscribeOnceList.get(name), callback]
            this.subscribeOnceList.set(name, currCallbacks)
        }
    };

    // events.subscribeOnceAsync("new-user").then(function (payload) {
    //     console.log(`I am invoked once ${payload}`);
    // });

    this.subscribeOnceAsync = async function (name) {
        return new Promise((resolve, reject) => {
            if (this.subscribeOnceAsyncList.has(name)) {
                const currCallbacks = [...this.subscribeOnceAsyncList.get(name), resolve]
                this.subscribeOnceAsyncList.set(name, currCallbacks)
            } else {
                this.subscribeOnceAsyncList.set(name, [resolve])
            }
        })
    };

    this.publish = function (name, data) {
        this.subscriptionList?.[name]?.forEach(listener => listener(data))

        this.subscribeOnceList?.[name]?.(data)
        this.subscribeOnceList.set(name, [])

        this.subscribeOnceAsyncList?.[name]?.forEach(listener => listener(data))
        this.subscribeOnceAsyncList.set(name, [])
    };

    this.publishAll = function (data) {
        const listenersKeys = Object.keys(this.subscriptionList)
        listenersKeys.forEach(key => {
            const listenerArray = this.subscriptionList[key]
            listenerArray.forEach(listener => {
                listener(data)
            })
        })
    };
}


// Test cases
const events = new Events();

const newUserNewsSubscription = events.subscribe("new-user", function (payload) {
    console.log(`Sending Q1 News to: ${payload}`);
});

events.publish("new-user", "Jhon");

//output: "Sending Q1 News to: Jhon"

const newUserNewsSubscription2 = events.subscribe("new-user", function (payload) {
    console.log(`Sending Q2 News to: ${payload}`);
});

events.publish("new-user", "Doe");

//output: "Sending Q1 News to: Doe"
//output: "Sending Q2 News to: Doe"

newUserNewsSubscription.remove(); // Q1 news is removed

events.publish("new-user", "Foo");
//output: "Sending Q2 News to: Foo"

events.publishAll("FooBar");
//output: "Sending Q2 News to: FooBar"

events.subscribeOnce("new-user", function (payload) {
    console.log(`I am invoked once ${payload}`);
});

events.publish("new-user", "Foo Once");
//output: "Sending Q2 News to: Foo Once" - normal event
//output: "I am invoked once Foo Once" - once event

events.publish("new-user", "Foo Twice");
//output: "Sending Q2 News to: Foo Twice" - normal event
// once event should not invoke for second time

events.subscribeOnceAsync("new-user").then(function (payload) {
    console.log(`I am invoked once ${payload}`);
});

events.publish("new-user", "Foo Once Async");
//output: "Sending Q2 News to: Foo Once Async"
//output: "I am invoked once Foo Once Async"
