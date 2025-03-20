/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode()
    let temp = dummy
    let carry = 0

    while (l1 || l2 || carry) {
        const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry
        carry = 0
        if (sum > 9) carry = 1
        const newNode = new ListNode(sum % 10)
        temp.next = newNode
        temp = temp.next
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }

    return dummy.next

};