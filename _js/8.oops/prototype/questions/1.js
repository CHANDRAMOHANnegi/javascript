function Rabbit() {}

/**
 * by default
 * Rabbit.prototype = { constructor: Rabbit };
 **/

console.log(Rabbit.prototype.constructor == Rabbit); // true

const rabbit = new Rabbit(); // inherits from {constructor: Rabbit}

console.log(rabbit.constructor == Rabbit); // true (from prototype)

let rabbit2 = new rabbit.constructor("Black Rabbit");
