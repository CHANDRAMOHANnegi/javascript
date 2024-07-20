Array.prototype.listeners = {}

Array.prototype.addListener = function (name, callback) {
    if (name in this.listeners)
        this.listeners[name].push(callback)
    else
        this.listeners[name] = []
}

Array.prototype.pushWithEvent = function (name, args) {
    this.push(...args)
    this.triggerEvent(name, args)
}

Array.prototype.popWithEvent = function (name, arr) {
    const element = this.pop()
    this.triggerEvent(name, element)
}

Array.prototype.triggerEvent = function (name, elements) {
    if (this.listeners[name]) {
        this.listeners[name].forEach(listener => {
            listener(name, elements, this)
        });
    }
}

Array.prototype.removeListener = function (name, callback) {
    if (this.listeners[name]) {
        this.listeners[name] = this.listeners[name].filter(e => e != callback)
    }
}

const arr = [];

const onAdd = (eventName, items, array) => {
    array.push(...items)
    console.log('items were added', items);
}

const onAddAgain = (eventName, items, array) => {
    array.push(...items)
    console.log('items were added again', items);
}

arr.addListener('add', onAdd);

arr.addListener('add', onAddAgain);

arr.addListener('remove', (eventName, item, array) => {
    array = array.filter(ele => ele != item)
    console.log(item, ' was removed');
});

arr.pushWithEvent('add', [1, 2, 3, 'a', 'b']);

arr.removeListener('add', onAddAgain); // removes the second listener

arr.pushWithEvent('add', [4, 5]);
arr.popWithEvent('remove');

console.log(arr);

// Output:
// "items were added" // [object Array] (5)
// [1,2,3,"a","b"]

// "items were added again" // [object Array] (5)
// [1,2,3,"a","b"]

// "items were added" // [object Array] (2)
// [4,5]

// 5 " was removed"

// // [object Array] (6)
// [1,2,3,"a","b",4]