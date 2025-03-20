const get = (obj, path = "") => {

    /*****
     * very important user replaceAll, not replace
     * 
     * replace "[" by "."
     * replace "]" by ""   
     * =>>> this is important, i was replacing both by ".", this was issue
     * 
     * ****/

    path = path.replaceAll("[", ".").replaceAll("]", "").split(".")

    for (const key of path) {
        if (!obj) {
            return undefined
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

console.log(get(obj, 'a.b.c'));
console.log(get(obj, 'a.b.c.0'));
console.log(get(obj, 'a.b.c[1]'));
console.log(get(obj, 'a.b.c[3]'));