
const JSONStringify = (obj) => {
    if (isArray(obj)) {
        let arrStr = '';
        obj.forEach((eachValue) => {
            arrStr += JSONStringify(eachValue);
            arrStr += ','
        });

        return `[` + arrStr + `]`;
    }

    if (isObject(obj)) {

        let objStr = '';

        const objKeys = Object.keys(obj);

        objKeys.forEach((eachKey) => {
            const eachValue = obj[eachKey];
            objStr += `"${eachKey}":${JSONStringify(eachValue)},`;
        });
        return `{` + objStr + `}`;
    }
};