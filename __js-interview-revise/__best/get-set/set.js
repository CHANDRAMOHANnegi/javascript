
const set = (obj, path, value) => {
    path = typeof path === "string" ? path.replaceAll("[", '.').replaceAll("]", '').split(".") : path

    let [key, ...rest] = path

    if (rest.length === 0) {
        obj[key] = value
    } else {
        /****
         * this check fix everything
         * obj is primitive, then this check will run
         * 
         * ****/
        if (!obj[key] || typeof obj[key] != "object") {
            /**
             * we have to check the next key, not the current key
             * ***/
            obj[key] = isNaN(Number(rest[0])) ? {} : []
        }
        obj[key] = set(obj[key], rest, value)
    }

    return obj
}

const abc = {
    a: {
        b: 1,
        d: {
            a: "hello"
        }
    }
};


const instance1 = JSON.parse(JSON.stringify(abc));
console.log(set(instance1, 'a.b.c', 'learnersbucket'))