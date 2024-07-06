

function printS(idx, ds, total, target, arr, n) {
    if(idx === n){
        if(total === target){
            console.log(ds);
        }
        return
    }
    ds.push(arr[idx])
    total += arr[idx]

    printS(idx + 1, ds, total, target, arr, n)

    total -= arr[idx]
    ds.pop()

    printS(idx + 1, ds, total, target, arr, n)
}


function main() {
    const arr = [1, 2, 3,4,5]
    const n = 5
    const target = 5
    const ds = []

    printS(0, ds, 0, target, arr, n)
}

main()