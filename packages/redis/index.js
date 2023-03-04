

class Redis {

    constructor() {
        this.data = new Map();
    }

    process(commandString) {
        const [command, ...args] = commandString.split(" ")

        switch (command) {
            case 'get': return this.#get(...args)
            case 'set': return this.#set(...args)
            case 'del': return this.#del(...args)
            case 'has': return this.#has(...args)
        }

    }

    #get(key) {
        // console.log('get');
        return this.data.get(key)
    }

    #set(key, value) {
        // console.log('set');
        this.data.set(key, value)
        return "OK"
    }

    #del(key) {
        const val = this.data.get(key)
        this.data.delete(key)
        return val
    }

    #has(key) {
        return this.data.has(key)
    }
}

const redis = new Redis();

[
    'get nonexisting',
    'set key "hello"',
    'get key',
    'has key',
    'del key',
    'get key',
    'has key',
].map(testcase => redis.process(testcase)).forEach(val => console.log(val))

