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

var removeNthFromEnd = function(head, n) {
    let prev = new ListNode()
    prev.next = head
    let slow = prev
    let fast = prev

    for(let i = 0; i <= n; i++){
        fast = fast.next
    }

    while(fast !=null){
        slow = slow.next
        fast = fast.next
    }

    slow.next = slow.next.next

    return prev.next;
};