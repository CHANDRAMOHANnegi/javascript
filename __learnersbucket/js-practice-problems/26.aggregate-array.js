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
    return Object.values([...arr].reduce((acc, item) => {
        const onValue = item[on]
        const whoValue = item[who]
        if (acc[onValue]) {
            /**
             * don't use colon ":" , use "=" , keep focus
             *  acc[onValue] : {
             *   [on]: onValue,
             *   [who]: [...acc[onValue][who], whoValue]
             *  }
             * **/
            acc[onValue] = {
                [on]: onValue,
                [who]: [...acc[onValue][who], whoValue]
            }
        } else {
            acc[onValue] = {
                [on]: onValue,
                [who]: [whoValue]
            }
        }
        return acc
    }, {}))
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