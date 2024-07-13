/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {

    let temp = head

    let odd = new ListNode(0)
    let startOdd = odd
    let even = new ListNode(0)
    let startEven = even

    let idx = 1
    
    while(temp!=null){
        if(idx%2 ===1){
            odd.next = temp
            odd=odd.next
        }else{
            even.next = temp
            even=even.next
        }
       temp = temp.next
       idx++
    }

/*****
 * 
 * Terminating the even list
 * 
 * Consider a linked list with the nodes 1 -> 2 -> 3 -> 4 -> 5. Here's what happens step-by-step if you don't terminate the even list properly:
 * Initial List: 1 -> 2 -> 3 -> 4 -> 5 -> null
 * Odd List Construction:
 * 1 -> 3 -> 5 -> null
 * Even List Construction:
 * 
 * 2 -> 4 -> 5 -> null
 * Notice that the even list still points to node 5, even though node 5 is part of the odd list.
 * 
 * Combining Lists without Termination:
 * If you combine the lists without terminating the even list, the combined list would look like:
 * 
 * 1 -> 3 -> 5 -> 2 -> 4 -> 5 -> null
 * In this scenario, node 5 appears twice, which is incorrect and can cause unexpected behavior.
 * 
 * ***/ 

    even.next = null

    odd.next = startEven.next

    return startOdd.next
};

