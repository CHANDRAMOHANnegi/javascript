// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 */

function objectAssign(target, ...sources) {
    if (target === null || target === undefined) throw new Error("invalid target")
    target = Object(target)
    const result = sources.reduce((all, src) => ({ ...all, ...src }), {})

    for (const key of [...Object.getOwnPropertyNames(result), ...Object.getOwnPropertySymbols(result)]) { // get all keys and symbols
        const objectDescriptor = Object.getOwnPropertyDescriptor(result, key) // get configuration of properties not just value
        Object.defineProperty(target, key, objectDescriptor)
    }

    return target
}
/*****
 * 1. do not change reference to target object
 * 2. Wrap primitive in Object
 * 
 * if some property is non-writable
 * 
 * ***/ 


// objectAssign({}, {a:3}, {b:4})  

// objectAssign should not create a new object  

// objectAssign should only assign enumerable properties  

// objectAssign should throw error when target is null or undefined  

// objectAssign should support Symbol  

// non-string primitives in source are ignored  

// string in source have enumerable properties, like 'abc'  

// numbers in target are wrapped  

// string in target are wrapped  

// booleans in target are wrapped  

// exceptions interrupt the ongoing copying task // 

// getters in sources are triggered  

// enumerable properties in non-primitive sources are assigned  