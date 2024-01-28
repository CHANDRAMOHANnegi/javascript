class Log {
  constructor(type) {
    this.type = type;
  }

  static getInstance(type) {
    if (!this.instance) {
      this.instance = new Logger(type);
    }
    return this.instance;
  }

  // Public method to log a message
  log(message) {
    console.log(this.logLevel);
    if (this.logLevel === "info") {
      console.log(`[${this.logLevel}] ${message}`);
    } else {
      console.log(`[${this.logLevel}] ${message}`);
    }
    // ... handle other log levels ...
  }
}


