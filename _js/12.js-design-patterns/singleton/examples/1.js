var Singleton = (function () {
  var instance;

  function createInstance() {
    // Private constructor to prevent instantiation
    function SingletonInstance() {
      // Your singleton instance initialization code here
    }

    return new SingletonInstance();
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Usage
var mySingleton1 = Singleton.getInstance();
var mySingleton2 = Singleton.getInstance();

console.log(mySingleton1 === mySingleton2); // Output: true (both references point to the same instance)
