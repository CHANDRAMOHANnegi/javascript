function printS(idx, ds, total, target, arr, n) {
    if(idx === n){
        if(total === target){
            return 1
        }
        return 0
    }
    ds.push(arr[idx])
    total += arr[idx]

   const inCount = printS(idx + 1, ds, total, target, arr, n)

    total -= arr[idx]
    ds.pop()

  const exCount =  printS(idx + 1, ds, total, target, arr, n)

  return inCount + exCount
}


function main() {
    const arr = [1, 2, 3,4,5]
    const n = 5
    const target = 5
    const ds = []

   const res = printS(0, ds, 0, target, arr, n)
   console.log(res);
}

main()