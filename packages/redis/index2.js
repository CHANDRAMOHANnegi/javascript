const kvCommands = [
  {
    name: "get",
    handler: (data, [key]) => data.get(key),
  },
  {
    name: "set",
    handler: (data, [key, value]) => {
      data.set(key, value);
      return "OK";
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

const hashCommands = [
  {
    name: "hset",
    handler: (data, [key, field, value]) => {
      if (data.has(key) && !(data.get(key) instanceof Map)) {
        throw new Error("Key already exisit but is not hash");
      }
      const map = data.get(key) ?? new Map();
      map.set(field, value);
      data.set(key, map);
      return "OK";
    },
  },
  {
    name: "hget",
    handler: (data, [key, field, value]) => {
      if (data.has([key]) && !(data.get(key) instanceof Map)) {
        throw new Error("Key already exisit but is not hash");
      }
      const map = data.get(key);
      if (!map) {
        return null;
      }
      return map.get(field);
    },
  },
  {
    name: "hgetall",
    handler: (data, [key, field, value]) => {
      if (data.has([key]) && !(data.get(key) instanceof Map)) {
        throw new Error("Key already exisit but is not hash");
      }
      const map = data.get(key);
      if (!map) {
        return null;
      }
      return Object.fromEntries(map.entries());
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
      ({ name }) => name == commandName.toLowerCase()
    );
    if (!command) {
      throw new Error(`Unexpected command: ${commandName} `);
    }
    return command.handler(this.#data, args);
  }
}

const redis = new Redis({
  commands: [...kvCommands, ...hashCommands],
});

[
  // 'get nonexisting',
  // 'set key "hello"',
  // 'get key',
  // 'del key',
  // 'get key',
  "HSET key field value",
  "HGET key field",
  "HGETALL key",

  "HSET key foo bar",
  "HGET key foo",

  "hgetall key",
]
  .map((testcase) => redis.process(testcase))
  .forEach((val) => console.log(val));
