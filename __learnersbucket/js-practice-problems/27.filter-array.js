const filterObject = (arr, aggVal) => {
    if (!isNaN(aggVal) && typeof aggVal === "number") {
        return [...arr][aggVal]
    } else {
        return [...arr].find(item => {
            const values = Object.values(item)
            return values.includes(aggVal)
        })
    }
};

const arr = [
    { name: "Amir", id: "1" },
    { name: "Samlan", id: "2" },
    { name: "Shahrukh", id: "0" },
];

console.log(filterObject(arr, 0));
console.log(filterObject(arr, "Amir"));
console.log(filterObject(arr, "0"));
console.log(filterObject(arr, "-1"));

// Output:
// { name: "Amir", id: "1" }
// { name: "Amir", id: "1" }
// { name: "Shahrukh", id: "0" }
// undefined