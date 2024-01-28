// Imagine you have a logging service that handles various log entries in your application.
// You want to ensure that there's only one logging instance to maintain a consistent log behavior.

/**
 *
 * In this example, the Logger class uses the Singleton pattern to ensure that there's only one logger instance.
 * This helps maintain a consistent logging behavior throughout the application.
 *
 * **/

// Singleton Logger
class Logger {
  constructor(type) {
    // Initialize logging settings
    this.logLevel = type;
    // ... other settings ...
  }

  // Public method to access the single instance
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

// Example usage
const logger1 = Logger.getInstance("info");
const logger2 = Logger.getInstance("debug");

console.log(logger1 === logger2); // true, both instances are the same

logger1.log("Application started."); // Outputs: [INFO] Application started.
logger2.log("Application started."); // Outputs: [INFO] Application started.
