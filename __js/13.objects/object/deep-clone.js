// object, null, undefined, 
// array, functions
// string, number, boolean, symbols

const isObject = (obj) => typeof obj === "object" && obj != null

function cloneDeep(data, map = new WeakMap()) {
    if (typeof data != "object" || data === undefined || data === null)
        return data

    if (map.has(data))
        return map.get(data)

    const obj = Array.isArray(data) ? [] : {}
    map.set(data, obj)

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            if (isObject(data[key])) {
                // here is was doing double checks for array, proactive checks
                if (Array.isArray(data[key])) {
                    obj[key] = data[key].map(o => cloneDeep(o, map))
                } else {
                    obj[key] = cloneDeep(data[key], map)
                }
            } else {
                obj[key] = data[key]
            }
        }
    }

    return obj
}

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