const stack = [5, 2, 3, 4, 1, 6] // [5,6,4,3,2,1]

const insertInSortedStack = (num, stack) => {
    if (stack.length === 0) {
        stack.push(num)
        return
    }
    const top = stack.shift()

    if (num >= top) {
        stack.unshift(num, top)
        return
    } else {
        insertInSortedStack(num, stack)
        stack.unshift(top)
    }
}

const sort = (stack) => {
    if (stack.length === 0) {
        return stack
    }

    const top = stack.shift()

    sort(stack)

    insertInSortedStack(top, stack)
}

sort(stack)
console.log(stack)

// -
// =
// =
// =
// =
