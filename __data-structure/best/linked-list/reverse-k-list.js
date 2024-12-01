/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// get kth node, 
// break its connection
// store next node
// reverse

const getKthNode = (head, k) => {
    let temp = head
    /*****
     * k > 1
     * not k > 0
     * focus
     * **/

    while (k > 1 && temp) {
        temp = temp.next
        k--
    }

    return temp
}

const reverseList = (head) => {
    let prev = null

    while (head != null) {
        const next = head.next
        head.next = prev
        prev = head
        head = next
    }

    return prev
}

var reverseKGroup = function (head, k) {
    let dummy = new ListNode(0)
    let prevEnd = dummy
    prevEnd.next = head

    while (true) {
        const kthNode = getKthNode(prevEnd.next, k)
        if (!kthNode) {
            break
        }

        const nextNode = kthNode.next
        kthNode.next = null
        const end = prevEnd.next

        const reverse = reverseList(end)

        end.next = nextNode
        prevEnd.next = reverse
        prevEnd = end
    }

    return dummy.next
};


















