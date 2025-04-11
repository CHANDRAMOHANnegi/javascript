
Function.prototype.mycall = function (thisArg, ...args) {
    const fn = this
    // if thisArg is undefined, default it to globalThis
    if (thisArg === undefined || thisArg === null) {
        thisArg = globalThis
    }
    // wrap it to objectify
    // native call method coerces primitive values to their wrapper objects
    // 
    thisArg = Object(thisArg)
    if (typeof fn != "function") {
        throw new Error(`${fn} is not a function`)
    }
    let symbolKey = Symbol()
    thisArg[symbolKey] = fn
    const result = thisArg[symbolKey](...args)
    delete thisArg[symbolKey]
    return result
}

/*****
 * 
 * 
 * 
 * **/ 


// mycall should respect `thisArg`  

// mycall should respect `args`  

// thisArg should be kept unchanged after the call  

// undefined null should be replaced with window  

// primitive values 1, `1` should be transformed   

// thisArg should not have property conflict if you add new property to it  