/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode()
    dummy.next = head
    let temp = dummy

    let i = 0
    while (i < n) {
        if (temp)
            temp = temp.next
        i++
    }

    let start = dummy

    while (temp?.next) {
        start = start.next
        temp = temp.next
    }

    if (start?.next) {
        start.next = start.next.next
    }

    return dummy.next

    /*****
     * why return dummy.next why not start
     * because start may have been removed
     * 
     * **/
};

