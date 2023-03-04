

const kvCommands = [
    {
        name: 'get',
        handler: (data, [key]) => data.get(key),
    },
    {
        name: 'set',
        handler: (data, [key, value]) => {
            data.set(key, value);
            return "OK";
        }
    },
    {
        name: 'del',
        handler: (data, [key]) => {
            const val = data.get(key);
            data.delete(key);
            return val;
        }
    }
];

const hashCommands = [
    {
        name: "hset",
        handler: (data, [key, field, value]) => {
            if (data.has(key) && !(data.get(key) instanceof Map)) {
                throw new Error("Key already exisit but is not hash")
            }
            const map = data.get(key) ?? new Map();
            map.set(field, value)
            data.set(key, map)
            return "OK"
        }
    },
    {
        name: "hget",
        handler: (data, [key, field, value]) => {
            if (data.has([key]) && !(data.get(key) instanceof Map)) {
                throw new Error("Key already exisit but is not hash")
            }
            const map = data.get(key)
            if (!map) {
                return null
            }
            return map.get(field);
        }
    },
    {
        name: "hgetall",
        handler: (data, [key, field, value]) => {
            if (data.has([key]) && !(data.get(key) instanceof Map)) {
                throw new Error("Key already exisit but is not hash")
            }
            const map = data.get(key)
            if (!map) {
                return null
            }
            return Object.fromEntries(map.entries())
        }
    },
]

const listCommands = [
    {
        name: 'lpush',
        handler: (data, [key, value]) => {
            if (data.has(key) && !Array.isArray(data.get(key))) {
                throw new Error('Key already exists but is not array.');
            }

            const arr = data.get(key) ?? [];
            const ret = arr.unshift(value);
            data.set(key, arr);
            return ret;
        }
    },
    {
        name: 'rpush',
        handler: (data, [key, value]) => {
            if (data.has(key) && !Array.isArray(data.get(key))) {
                throw new Error('Key already exists but is not array.');
            }

            const arr = data.get(key) ?? [];
            const ret = arr.push(value);
            data.set(key, arr);
            return ret;
        }
    },
    {
        name: 'lrange',
        handler: (data, [key, start, stop]) => {
            if (data.has(key) && !Array.isArray(data.get(key))) {
                throw new Error('Key already exists but is not array.');
            }

            const arr = data.get(key);
            if (!arr) {
                return null;
            }

            return arr.slice(start,stop);
        }
    }
];

class Redis {
    #data;
    #commands;

    constructor({ commands }) {
        this.#data = new Map();
        this.#commands = commands;
    }

    process(commandString) {
        const [commandName, ...args] = commandString.split(" ")
        const command = this.#commands.find(({ name }) => name == commandName.toLowerCase())
        if (!command) {
            throw new Error(`Unexpected command: ${commandName} `)
        }
        return command.handler(this.#data, args)
    }
}

const redis = new Redis({
    commands: [
        ...kvCommands,
        ...hashCommands,
        ...listCommands
    ]
});

[
    // 'get nonexisting',
    // 'set key "hello"',
    // 'get key',
    // 'del key',
    // 'get key',
    // 'HSET key field value',
    // 'HGET key field',
    // 'HGETALL key',

    // 'HSET key foo bar',
    // 'HGET key foo',

    // 'hgetall key',

    'lpush key one',
    'rpush key two',
    'lrange key 0 1',

].map(testcase => redis.process(testcase)).forEach(val => console.log(val))

