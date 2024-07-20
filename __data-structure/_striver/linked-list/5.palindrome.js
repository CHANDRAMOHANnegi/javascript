/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var reverse = function(head){
    let prev = null

    while(head!=null){
        let next = head.next
        head.next = prev
        prev = head
        head = next
    }

    return prev
 }

var isPalindrome = function(head) {

    let slow = head
    // i am using head.next, to handle even-odd issue 
    let fast = head.next

    while(fast != null && fast.next!=null){
        fast = fast.next.next
        slow = slow.next
    }

    let left = head

    /****
     * Yes you will have to reverse list
     * */ 
    let prev = reverse(slow.next)

    while(prev!=null){
        if(prev.val !== left.val){
            return false
        }
        prev=prev.next
        left=left.next
    }

    return true
};