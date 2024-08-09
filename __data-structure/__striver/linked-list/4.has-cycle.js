/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function(head) {
    let slow = head
    let fast = head

    /******
     * I was not able to figure out this base condition
     * 
     * think think
     * 
     * i was thinking (fast !== slow) to be the condition, but they were initially equal
     * 
     * */ 
    while(fast != null && fast.next!=null){
        slow = slow.next
        fast = fast.next.next

        if(fast === slow){
            return true
        }
    }
    return false
};