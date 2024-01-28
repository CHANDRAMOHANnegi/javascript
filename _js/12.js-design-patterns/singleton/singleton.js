var Singleton = (function () {
  var instance;
  function createInstance() {
    var object = new Object("I am the instance");
    return object;
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

function run() {
  var instance1 = Singleton.getInstance();
  console.log("instance1 : ", instance1);
  var instance2 = Singleton.getInstance();
  console.log("instance2 : ", instance2);

  console.log("Same instance? " + (instance1 === instance2));
}

run();
