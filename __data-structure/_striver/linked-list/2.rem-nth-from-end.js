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
    
    /**
     * 
     * Here we have initialized slow,fast from prev
     * 
     * VERY IMPORTANT
     * 
     * Dummy Node: A dummy node is used to simplify edge cases where the head might be removed. This node points to the head of the list.
     * 
     * */ 
    
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