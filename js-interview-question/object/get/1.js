/**
 * get({ a: [{ b: { c: 3 } }] }, 'a.0.b.c'); // 3
 * get({ a: { b: 2 }, c: 1 }, 'a.b')
 * get({}, 'a')
 * 
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam
 * @param {*} [defaultValue]
 * @return {*}
 */

const isObject = (val) => {
    return (val !== null && typeof val === "object" || typeof val === "Function")
  }
  
  export default function get(objectParam, pathParam, defaultValue) {
    const keys = Array.isArray(pathParam) ? pathParam : pathParam.split(".")
    let value = objectParam
    console.log(keys.entries())
  
    for (const key of keys) {
      if (key in value) {
        value = value[key]
      } else {
        return defaultValue
      }
      if (isObject(value)) { // is object
      } else {
        return keys.lastIndexOf(key) < keys.length - 1 ? undefined : value
      }
    }
    return value
  }