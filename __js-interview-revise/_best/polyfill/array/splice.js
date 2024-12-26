Array.prototype.mySplice = function name(start, noOfElementsToRemove = 0, ...elementsToInsert) {
    const elementToStart = this.filter((ele, idx) => idx < start)
    const elementToAppend = [...elementsToInsert]
    const restOfElement = this.filter((_, idx) => idx >= start + noOfElementsToRemove)

    const result = [...elementToStart, ...elementToAppend, ...restOfElement]
    const removed = []

    for (let index = start; index < start + noOfElementsToRemove; index++) {
        removed.push(this[index])
    }

    result.forEach((ele, index) => this[index] = ele)
    /*****
     * 
     * !
     * REMEMBER
     * 
     * ***/ 
    // Remove excess elements
    this.length = index;

    // returns the removed elements
    return removed
}

const arr = [1, 2, 3, 4, 5, 6]

console.log(arr.mySplice(1, 3));
// console.log(arr.splice(1, 3));

console.log(arr);


