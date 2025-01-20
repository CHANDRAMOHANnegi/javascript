
var reverse = (head) => {
    let prev = null

    while (head != null) {
        const next = head.next
        head.next = prev
        prev = head
        head = next
    }

    return prev
}