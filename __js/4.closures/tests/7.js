function buildGreeting(message) {
    return function (audience) {
        return message + ' ' + audience;
    }
}
let greeting1 = buildGreeting('Hi');
let greeting2 = buildGreeting('Hello');

console.log(greeting1('User')); // Hi User
console.log(greeting1('World')); // Hello World

console.log(greeting2('User')); // Hi User
console.log(greeting2('World')); // Hello World

