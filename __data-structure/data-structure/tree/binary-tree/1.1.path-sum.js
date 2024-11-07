
var pathSum = function(root, targetSum) {
    const path =[]
    print(root,path,[],targetSum)
    return path
};

var print = function(node,path,ans,targetSum){
    if(!node){
        return
    }

    // if(targetSum < node.val){
    //     return
    // }

    // ans.push(node.val)
    // targetSum -= node.val

    if(!node.left && !node.right){
        targetSum -= node.val
        if(targetSum === 0)
            path.push([...ans, node.val])
        return
    }
        
    print(node.left,path, [...ans,node.val],targetSum - node.val )

    /*****
    If u got ans from one path, then u need to reset the references
    ****/ 

    print(node.right,path, [...ans,node.val], targetSum - node.val)
}