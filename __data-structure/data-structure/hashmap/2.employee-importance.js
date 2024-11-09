/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */

var GetImportance = function(employees, id) {
    const employeeMap = new Map();
    for (employee of employees) {
        employeeMap.set(employee.id, {importance : employee.importance, sub : employee.subordinates})
    }

    /*******
     * 
     * I WAS NOT ABLE TO FIGURE OUT TO USE "BFS"
     * 
     * hey, i thought of using recursion
     * 
     * but that recursion is "DFS"
     * 
     * When-ever you are trying to use
     * 
     * ****/ 

    let total = 0
    let queue = [id]
    while(queue.length){
        const currId = queue.shift()
        const {importance,sub} = employeeMap.get(currId)
        total += importance
        queue.push(...sub)
    }

    return total
};