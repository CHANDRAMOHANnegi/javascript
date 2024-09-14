// https://www.youtube.com/watch?v=gZ4MCb2nlfQ

const IndexedArray = new Proxy(Array, {
    construct: (target, args) => {
        const [originalArray] = args
        console.log('hello');
        const index = {}

        originalArray.forEach((item) => {
            index[item.id] = item
        })

        return new Proxy(new Array(...originalArray), {
            get: (target, name) => {
                if (name === "push") {
                    console.log('=====');
                    return function (item) {
                        index[item.id] = item
                        return Reflect.get(target, name).call(target, item)
                    }
                } else if (name === "findById") {
                    return (searchId) => index[searchId]
                }
                return Reflect(target, name)
            }
        })
    }
})


const indexedArray = new IndexedArray([
    { id: 1, name: "brown" },
    { id: 2, name: "grizzly" },
    { id: 3, name: "black" },
    { id: 4, name: "polar" },
])

indexedArray.push({ id: 55, name: "cm" })
const id = indexedArray.findById(55)
console.log(id);
console.log(indexedArray.findById(30));
indexedArray.push({ id: 30, name: "cm hu me" })
console.log(indexedArray.findById(30));

console.log(indexedArray);
