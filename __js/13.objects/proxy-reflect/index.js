let dictionary = {
  Hello: "Hola",
  Bye: "Adiós",
};

dictionary = new Proxy(dictionary, {
  get(target, phrase) {
    // intercept reading a property from dictionary
    if (phrase in target) {
      // if we have it in the dictionary
      return target[phrase]; // return the translation
    } else {
      // otherwise, return the non-translated phrase
      return phrase;
    }
  },
  set(target, phrase, newValue) {
    target[phrase] = newValue;
  },
});

// Look up arbitrary phrases in the dictionary!
// At worst, they're not translated.
console.log(dictionary["Hello"]); // Hola
console.log(dictionary["Welcome to Proxy"]); // Welcome to Proxy (no translation)
dictionary.hi = "namaste";

console.log(dictionary);

/***
 *
 * Proxies and Reflect
 *
 * ***/

let dict = {
  Hello: "Hola",
  Bye: "Adiós",
};

dict = new Proxy(dict, {
  get(target, phrase) {
    // intercept reading a property from dictionary
    if (phrase in target) {
      // if we have it in the dictionary
      return Reflect.get(target, phrase); // return the translation
    } else {
      // otherwise, return the non-translated phrase
      return phrase;
    }
  },
  set(target, phrase, newValue) {
    // target[phrase] = newValue;
    Reflect.get(target, phrase, newValue);
  },
});
