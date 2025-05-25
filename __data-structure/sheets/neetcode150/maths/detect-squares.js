var DetectSquares = function () {
    this.points = []
    this.pointsMap = new Map()
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
    this.points.push(point)
    const key = `${point[0]}-${point[1]}`
    this.pointsMap.set(key, (this.pointsMap.get(key) ?? 0) + 1)
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function (point) {
    const [x, y] = point
    const map = this.pointsMap
    let count = 0

    for (const [x1, y1] of this.points) {
        // treat every point as diagonal 
        // if these point exist on horizontal or vertical line, then skip them
        // if width != height skip them
        if (Math.abs(x - x1) !== Math.abs(y - y1) || x === x1 || y === y1) {
            continue
        }

        //
        count += (map.get(`${x1}-${y}`) ?? 0) * (map.get(`${x}-${y1}`) ?? 0)
    }

    return count
};



/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */