
const set = (obj, path, value) => {
    path = typeof path === "string" ? path.replaceAll("[", '.').replaceAll("]", '').split(".") : path

    let [key, ...rest] = path

    if (rest.length) {
        /****
         * this check fix everything
         * obj is primitive, then this check will run
         * 
         * ****/
        if (!obj[key]) {
            /**
             * we have to check the next key, not the current key
             * ***/
            obj[key] = (isNaN(Number(rest[0]))) ? {} : []
        }

        obj[key] = set(obj[key], rest, value)
    } else {
        obj[key] = value
    }

    return obj
}



const abc = {
    a: {
        b: {
            c: [1, 2, 3]
        },
        d: {
            a: "hello"
        }
    }
};


const instance1 = JSON.parse(JSON.stringify(abc));
console.log(set(instance1, 'a.b.c', 'learnersbucket'))