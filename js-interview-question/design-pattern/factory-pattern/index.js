class Car {
  constructor(name) {
    this.name = name;
  }
}

class Truck {
  constructor(name) {
    this.name = name;
  }
}

class Bike {
  constructor(name) {
    this.name = name;
  }
}

class VehicleFactory {
  constructor() {}

  create(name, type) {
    switch (name) {
      case "car":
        return new Car();
        break;

      case "truck":
        return new Truck();
        break;

      case "bike":
        return new Bike();
        break;

      default:
        break;
    }
  }
}

const vehicleFactory = new VehicleFactory();

const vehicles = [];

vehicles(vehicleFactory.create("car"));
vehicles(vehicleFactory.create("truck"));
vehicles(vehicleFactory.create("bike"));
