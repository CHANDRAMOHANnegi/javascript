const map1 = new Map();


// 1. set
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

// 2. get
console.log(map1.get('a')); // 1

map1.set('a', 97);

console.log(map1.get('a'));// 97

console.log(map1.size);// 3


// 3. delete
map1.delete('b');


// 4. size
console.log(map1.size); // 2

// 5. ForEach
function logMapElements(value, key, map) {
    console.log(`m[${key}] = ${value}`);
}

map1.forEach(logMapElements);


// 6. enteries
const map2 = new Map();

map2.set('0', 'foo');
map2.set(1, 'bar');
const iterator2 = map2.entries();

console.log(iterator2.next().value);
// Expected output: Array ["0", "foo"]

console.log(iterator2.next().value);
// Expected output: Array [1, "bar"]


// 7. has
console.log(map2.has('bar'));
// Expected output: true

console.log(map2.has('baz'));
// Expected output: false


// 8. keys

const iterator3 = map2.keys();

console.log(iterator3.next().value);
// Expected output: "0"

console.log(iterator3.next().value);
// Expected output: 1

// 9. values

const iterator4 = map2.values();

console.log(iterator4.next().value);
// Expected output: "foo"

console.log(iterator4.next().value);
// Expected output: "bar"
