class ConfigurationManager {
  constructor() {
    this.settings = {
      apiUrl: "https://localhost:3000",
      apiKey: "api-key",
    };
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new ConfigurationManager();
    }
    return this.instance;
  }

  getSetting(key) {
    return this.settings[key];
  }
}

// Example usage
const configManager1 = ConfigurationManager.getInstance();
const configManager2 = ConfigurationManager.getInstance();

console.log(configManager1 === configManager2); // true, both instances are the same

console.log(configManager1.getSetting("apiUrl")); // Outputs: https://api.example.com
