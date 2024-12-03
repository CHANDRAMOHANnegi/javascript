function deleteNode(head, key) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;

    while (current.next !== null) {
        if (current.next.val === key) {
            current.next = current.next.next;
            break;
        }
        current = current.next;
    }

    return dummy.next;
}