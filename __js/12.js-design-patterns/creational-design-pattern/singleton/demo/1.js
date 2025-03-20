// Suppose you have a configuration manager that loads and manages application settings.
// You want to ensure that there's only one instance of the configuration manager throughout your application.

/**
 *
 * In this example, the ConfigurationManager class uses a static method (getInstance) to provide access to a single instance.
 * This ensures that there's only one configuration manager across the application, and any changes made to it are reflected globally.
 *
 * */

// Singleton Configuration Manager
class ConfigurationManager {
  constructor() {
    // Initialize configuration settings
    this.settings = {
      apiUrl: "https://api.example.com",
      apiKey: "your-api-key",
      // ... other settings ...
    };
  }

  // Public method to access the single instance
  static getInstance() {
    if (!this.instance) {
      this.instance = new ConfigurationManager();
    }
    return this.instance;
  }

  // Public method to get a specific configuration setting
  getSetting(key) {
    return this.settings[key];
  }
}

// Example usage
const configManager1 = ConfigurationManager.getInstance();
const configManager2 = ConfigurationManager.getInstance();

console.log(configManager1 === configManager2); // true, both instances are the same

console.log(configManager1.getSetting("apiUrl")); // Outputs: https://api.example.com
