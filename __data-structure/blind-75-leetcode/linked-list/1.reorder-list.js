/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

// 1 2 3 4 5 
// 1 2 3 --- 4 5
// 1 2 3
// 5 4

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

var reorderList = function (head) {
    if (head.next === null)
        return head
    let fast = head
    let slow = head

    let first = head
    const temp = first

    /*****
     * fast = fast.next
     * i was trying to do this so, i get previous element
     * which was not needed
     * 
     * ***/ 

    while (fast != null && fast.next != null) {
        fast = fast.next.next
        slow = slow.next
    }

    let second = slow.next
    slow.next = null

    second = reverse(second)

    while (second != null) {
        const firstNext = first.next
        const secondNext = second.next

        first.next = second
        second.next = firstNext

        first = firstNext
        second = secondNext
    }

    return temp

};