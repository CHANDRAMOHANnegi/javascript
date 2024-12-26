Object.prototype.myGroupBy = function (array, callback) {
    if (!array) {
        return
    }

    return array.reduce((map, ele) => {
        const res = callback(ele)
        if (map[res]) {
            map[res] = [...map[res], ele]
        } else {
            map[res] = [ele]
        }
        return map
    }, {})

}

const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];

const result = Object.myGroupBy(inventory, ({ type }) => type);

console.log(result);

/* 
Result is:
    {
    vegetables: [
            { name: 'asparagus', type: 'vegetables', quantity: 5 },
        ],
        fruit: [
            { name: "bananas", type: "fruit", quantity: 0 },
            { name: "cherries", type: "fruit", quantity: 5 }
        ],
        meat: [
            { name: "goat", type: "meat", quantity: 23 },
            { name: "fish", type: "meat", quantity: 22 }
        ]
    }
*/