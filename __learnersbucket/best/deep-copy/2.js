function cloneDeep(originalObj) {
    if (!originalObj || typeof originalObj != "object") {
        return originalObj;
    }

    if (Array.isArray(originalObj)) {
        return originalObj.map(cloneDeep);
    }

    const newObj = {};

    for (const [key, value] of Object.entries(originalObj)) {
        newObj[key] = cloneDeep(value);
    }
    return newObj;
}
