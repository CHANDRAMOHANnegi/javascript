const deepCopy = (obj) => {
    if (obj === null || typeof obj !== "object") return obj;

    const copy = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
};

const original = { a: { b: { c: new Date() } }, d: new Set([1, 2, 3]) };
const copy = deepCopy(original);

console.log(original);
console.log(copy);
