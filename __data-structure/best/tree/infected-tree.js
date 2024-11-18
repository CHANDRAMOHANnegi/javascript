/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */

// https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/?envType=problem-list-v2&envId=binary-tree

const createGraphfromTree = (node,graph)=>{
    if(!node) return graph
    if(!(node.val in graph)) graph[node.val] = [];
    if(node.left){
        graph[node.val].push(node.left.val)
        if(!(node.left.val in graph)) 
            graph[node.left.val] = []
        graph[node.left.val].push(node.val)
        createGraphfromTree(node.left,graph)
    }
    if(node.right){
        graph[node.val].push(node.right.val)
        if(!(node.right.val in graph)) 
            graph[node.right.val] = []
        graph[node.right.val].push(node.val)
        createGraphfromTree(node.right,graph)
    }
    return graph
}

var amountOfTime = function(root, start) {
    const graph = createGraphfromTree(root,{})
    const visited = new Set()

    let totalLevel = 0
    let queue = [[start,0]]

    while(queue.length){
        const [currNode,level] = queue.shift()

        if(visited.has(currNode))continue
        visited.add(currNode)

        for(const nbr of graph[currNode]){
            if(!visited.has(nbr)){
                totalLevel = Math.max(totalLevel,level + 1)
                queue.push([nbr,level + 1])
            }
        }
        
    }

    return totalLevel
};