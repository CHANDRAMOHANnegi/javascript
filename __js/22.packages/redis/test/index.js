class Redis {
  constructor() {
    this.data = new Map();
  }

  #get(key) {
    return this.data.get(key);
  }

  #set(key, value) {
    this.data.set(key, value);
    return "Ok";
  }

  #del(key) {
    const val = this.data.get(key);
    this.data.delete(key);
    return val;
  }

  #has(key) {
    return this.data.has(key);
  }

  static print() {
    console.log(this.data);
  }

  process(commandString) {
    const [command, ...args] = commandString.split(" ");

    switch (command) {
      case "get":
        return this.#get(...args);
      case "set":
        return this.#set(...args);
      case "del":
        return this.#del(...args);
      case "has":
        return this.#has(...args);
    }
  }
}

const redis = new Redis();

['set key "hello"']
  .map((testcase) => redis.process(testcase))
  .forEach((val) => console.log(val));

Redis.print();
