
const findMidNode = (head) => {
    if(!head || !head.next) return head
    let prev = null
    let slow = head
    let fast = head

    while(fast != null && fast.next != null){
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }

    if(prev) prev.next = null
    return slow
};

const construct = (head) => {
    if(!head)return head
    if(!head.next) return new TreeNode(head.val)

    const mid = findMidNode(head)

    return new TreeNode(mid.val,construct(head),construct(mid.next))
};

var sortedListToBST = function (head) {
    return construct(head);
};
