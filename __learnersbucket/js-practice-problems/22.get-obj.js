const get = (obj, path = '') => {
    const props = path.split('.')//.map(str => str.includes('['))

    let res = obj

    for (const prop of props) {
        if (typeof prop === 'number') {
            res = res[prop]
        } else if (prop.includes('[')) {
            const key = prop[0],
                index = prop.substring(2, prop.length - 1)
            res = res[key][index]
        } else {
            res = res[prop]
        }
    }

    return res
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
