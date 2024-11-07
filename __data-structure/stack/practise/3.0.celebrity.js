function findCelebrity(n, knows) {
    const stack = [...Array(n)].map((a, i) => i)
    
    while (stack.length >= 2) {
        const first = stack.pop()
        const second = stack.pop()
        if (knows(first, second)) {
            stack.push(second)
        } else {
            stack.push(first)
        }
    }

    let potentialCelebrity = stack.pop()

    for (let i = 0; i < n; i++) {
        if (i != potentialCelebrity) {
            /****
             * A knows B,
             * in stack we might have checked A knows B
             * 
             * so here we have to check that also B should not know A
             * 
             * ****/
            if (knows(potentialCelebrity, i) || !knows(i, potentialCelebrity)) {
                return -1
            }
        }
    }
    return potentialCelebrity
}

module.exports = { findCelebrity };