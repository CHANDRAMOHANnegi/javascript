/**
 * @param {object} source
 * @param {string | string[]} path
 * @param {any} [defaultValue]
 * @return {any}
 */
function get(source, path, defaultValue = undefined) {
  if (!path.length) return defaultValue
  const keys = typeof path === "string" ? [...path.replaceAll("[", ".").replaceAll("]", ".").split(".")].filter(p => p != "") : path

  let obj = source
  for (const key of keys) {
    if (obj[key] == null || obj[key] == undefined || !(key in obj)) { // early return
      return defaultValue
    }
    obj = obj[key]
  }
  return obj
}

const obj = {
  a: {
    b: {
      c: [1, 2, 3]
    }
  }
}
console.log(get(obj, 'a.b.c')) // [1,2,3]
console.log(get(obj, 'a.b.c.0')) // 1
console.log(get(obj, 'a.b.c[1]')) // 2
console.log(get(obj, ['a', 'b', 'c', '2'])) // 3
console.log(get(obj, 'a.b.c[3]')) // undefined
console.log(get(obj, 'a.c', 'bfe')) // 'bfe'

/****
 * 
 * Array is object, so no need to add explicit checks for Array
 * 
 * 
 * 
 * 
 * 
 * ***/