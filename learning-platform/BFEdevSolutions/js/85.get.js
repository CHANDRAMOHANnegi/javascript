/**
 * @param {object} source
 * @param {string | string[]} path
 * @param {any} [defaultValue]
 * @return {any}
 */
function get(source, path, defaultValue = undefined) {
    const paths =Array.isArray(path)?path: path.replaceAll("[",".").replaceAll("]","").split(".")
    if(paths.length===0)return undefined
  
    for(const key of paths){
      if(source[key]){
        source = source[key]
      }else{
        return defaultValue
      }
    }
    return source
  }
  
  const obj = {
    a: {
      b: {
        c: [1,2,3]
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