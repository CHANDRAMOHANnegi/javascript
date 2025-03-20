const commands = [
  {
    name: "get",
    handler: (data, [key]) => data.get(key),
  },
  {
    name: "set",
    handler: (data, [key, value]) => {
      data.set(ket, value);
      return "Ok";
    },
  },
  {
    name: "del",
    handler: (data, [key]) => {
      const val = data.get(key);
      data.delete(key);
      return val;
    },
  },
];

class Redis {
  #data;
  #commands;
  constructor({ commands }) {
    this.#data = new Map();
    this.#commands = commands;
  }

  process(commandString) {
    const [commandName, ...args] = commandString.split(" ");
    const command = this.#commands.find(
      ({ name }) => name === commandName.toLowerCase()
    );
    if (!command) {
      throw new Error(`UnExpected Command: ${commandName}`);
    }
    return command.handler(this.#data, args);
  }
}

const redis = new Redis({ commands });

[
  "get nonexisting",
  'set key "hello"',
  "get key",
  "del key",
  "get key",
  // 'HSET key field value',
  // 'HGET key field',
  // 'HGETALL key',

  // 'HSET key foo bar',
  // 'HGET key foo',

  // 'hgetall key',
]
  .map((testcase) => redis.process(testcase))
  .forEach((val) => console.log(val));

// ['set key "hello"']
//   .map((testcase) => redis.process(testcase))
//   .forEach((val) => console.log(val));

// Redis.print();
