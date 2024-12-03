/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var detectCycle = function (head) {
    if (head === null || head.next === null)
        return null

    let fast = head
    let slow = head

    while (fast != null && fast.next != null) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            break
        }
    }

    /*****
     * Now here we will have to check if above loop ended because of fast getting null...
     * and not because of that break statement  
     * 
     * Means no loop
     * */

    if (fast == null || fast.next === null)
        return null

    slow = head

    while (slow != fast) {
        slow = slow.next
        fast = fast.next
    }

    return slow
};