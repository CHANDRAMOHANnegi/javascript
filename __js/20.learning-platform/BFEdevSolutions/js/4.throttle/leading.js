
function throttleLeading(func, wait) {
    let shouldWait = false

    return (...args) => {
        if (!shouldWait) {
            shouldWait = true
            setTimeout(() => shouldWait = false, wait);
            func(...args)
        }
    }
}

// calls : At 0ms, 200ms, 800ms, 1500ms, 1600ms
// Executed: 0ms, 1500ms

// for the previous example of throttling by 3 dashes
// ─A─B─C─ ─D─ ─ ─ ─ ─ ─ E─ ─F─G
// with {leading: true, trailing: false}, only A D E are kept
// ─A─ ─ ─ ─D─ ─ ─ ─ ─ ─ E


// A: 0ms, B: 7ms, C: 12ms, D: 22ms, E: 25ms, F: 45ms
// A   C   D   F
