/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

class MinHeap {
    constructor() {
        this.data = []
    }
    enqueue(item) {
        let idx = 0
        while (idx < this.data.length && this.data[idx].val < item.val) {
            idx++
        }
        this.data.splice(idx, 0, item)
    }
    dequeue() {
        return this.data.shift()
    }
    size() {
        return this.data.length
    }

}

var mergeKLists = function (lists) {
    const heap = new MinHeap()
    lists.map(list => {
        if (list)
            heap.enqueue(list)
    })

    let dummy = new ListNode()
    let tempDummy = dummy

    while (heap.size() > 0) {
        const newNode = heap.dequeue()
        const temp = newNode.next
        tempDummy.next = newNode
        tempDummy = newNode
        newNode.next = null
        if (temp) {
            heap.enqueue(temp)
        }
    }

    return dummy.next
};