// const aggregate = (arr, on, who) => {
//     const onSet = new Set()
//     arr.forEach(item => onSet.add(item[on]));
//     const reso = [...onSet].map(key => ({ [on]: key }))
//     return reso.map((item) => {
//         const result = arr.filter(a => a[on] === item[on])
//         return {
//             ...item,
//             [who]: result.map(item => item[who])
//         }
//     })
// }

const aggregate = (arr, on, who) => {
    const values = [...arr].reduce((acc, item) => {
        if (acc[on]) {
            acc[on] = {
                [on]: on,
                [who]: [...acc[on][who], item[who]]
            }
        } else {
            acc[on] = {
                [on]: on,
                [who]: [item[who]]
            }
        }
        return acc
    }, {})

    return Object.values(values)
}

const endorsements = [
    { skill: 'css', user: 'Bill' },
    { skill: 'javascript', user: 'Chad' },
    { skill: 'javascript', user: 'Bill' },
    { skill: 'css', user: 'Sue' },
    { skill: 'javascript', user: 'Sue' },
    { skill: 'html', user: 'Sue' }
];

console.log(aggregate(endorsements, "skill", "user"));

// Output:
// [
//   {
//     "skill": "css",
//     "user": [
//       "Bill",
//       "Sue"
//     ]
//   },
//   {
//     "skill": "javascript",
//     "user": [
//       "Chad",
//       "Bill",
//       "Sue"
//     ]
//   },
//   {
//     "skill": "html",
//     "user": [
//       "Sue"
//     ]
//   }
// ]