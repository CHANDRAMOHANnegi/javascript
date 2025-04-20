// object, null, undefined, 
// array, functions
// string, number, boolean, symbols

const isObject = (obj) => typeof obj === "object"

function cloneDeep(data, map = new WeakMap()) {
    if (typeof data != "object" || data === undefined || data === null)
        return data

    if (map.has(data))
        return map.get(data)

    const obj = Array.isArray(data) ? [] : {}
    map.set(data, obj)

    for (const key of [...Object.getOwnPropertyNames(data), ...Object.getOwnPropertySymbols(data)]) {
        // take care for symbols and keys
        obj[key] = isObject(data[key]) ? cloneDeep(data[key], map) : data[key]
    }

    return obj
}

/****
 * 1. take care of symbols
 * 2. take care of circular dependencies
 * 3. take care of array, if array then return array
 * 4. don't over checks, keep it simple
 * ***/ 


// cloneDeep(undefined)  
// cloneDeep(null)  
// cloneDeep(3)  
// cloneDeep(Number('3'))  
// cloneDeep(3n)  
// cloneDeep(Symbol())  
// cloneDeep('str')  
// cloneDeep(true)  
// cloneDeep({a:{b:{c:3}, d: 4}})  

// cloneDeep({[Symbol()]:'bfe'})  
// cloneDeep([1,[2,3],{a:{b:{c:3}, d: 4}}])  
// circular reference in {a: {b: {c:a}}}  
// circular reference in `const arr = [1,2,{ a: arr}`  


// const obj = {a: {b: {}}}
// obj.a.b.c = obj.a

// obj = {
//   a :{
//     b :{
//       c:{
//         a :{
//           b:{}
//         }
//       }
//     }
//   }
// }