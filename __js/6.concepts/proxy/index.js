const person = {
  name: "chandra mohan",
  nickName: "cm",
  age: 26,
  bornIn: "India",
  occupation: "Software Engineer",
};

const personProxy = new Proxy(person, {
  get: (obj, prop, receiver) => {
    console.log(`${prop} is ${obj[prop]}`);
    return prop in obj ? Reflect.get(obj, prop, receiver) : 420;
  },
  set: (obj, prop, value, receiver) => {
    console.log(`${prop} changed from ${obj[prop]} to ${value}`);
    obj[prop] = value;
    Reflect.set(obj, prop, value, receiver);
  },
});

personProxy["age"] = 24;
// console.log(personProxy["age"]);
// console.log(personProxy["abc"]);
 