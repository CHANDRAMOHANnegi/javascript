/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */

/******
 * 
 * When will catch run
 * 1. try me jo function run ho raha hai, vo agar error throw kare
 * 2. try me jo function hai vo reject ho jaye, agar vo async run hora hai and await laga hai to
 * 
 * ***/ 

async function fetchWithAutoRetry(fetcher, maximumRetryCount) {
    while(true){
        try{
            const result = await fetcher()
            return result
          } catch(err){
            if(maximumRetryCount>0){
              maximumRetryCount--
            }else{
              return new Promise((res,rej)=>rej(err))
            }
          }
      }
  }

// let callCount = 0
// let fetcher = () => new Promise((resolve, reject) => {
//     callCount += 1
//     if (callCount >= 3) {
//         resolve('bfe')
//     } else {
//         reject('error')
//     }
// })

// fetchWithAutoRetry(fetcher, 4)
//     .then((data) => {
//         console.log(callCount,3)
//         console.log(data,'bfe')
//     }).catch((error) => {
//         console.log(error);
//     })


let callCount = 0
let fetcher = () => new Promise((resolve, reject) => {
    callCount += 1
    reject('error')
})
fetchWithAutoRetry(fetcher, 6)
    .then((data) => {
        console.log('success handler')
    }).catch((error) => {
        console.log(callCount, 7)
        console.log(error, 'error')
    })