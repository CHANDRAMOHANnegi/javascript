var isSameTree = function(p, q) {
    if(!p && q) return false
    if(p && !q) return false
    if(!p && !q) return true

    if(p.val != q.val) return false
 
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
};

const find = (root,node)=>{
    if(root === null || root.val === node.val) return root

    return find(root.left,node) || find(root.right,node)
}

var isSubtree = function(root, subRoot) {
    if(!root) return false
    const root2 = find(root,subRoot)
    if(!root2){
        return false
    }

    return isSameTree(subRoot,root2)
};

/*****
 * I was using this find method, i was assuming that values will be unique
 * **/ 