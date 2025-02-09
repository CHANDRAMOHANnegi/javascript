/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

var carFleet = function(target, position, speed) {
    const pairs = position.map((p,i)=>([p, (target - p) / speed[i]]))
    pairs.sort((a,b)=>a[0] - b[0])

    let fleets = 1 // no car can takeover first car(closest to target)
    let lastTime = pairs[pairs.length - 1][1] // closest to target

    for(let i = pairs.length - 2; i>=0; i--){
        const [,time]= pairs[i]
        if(time > lastTime){
            fleets++
            lastTime = time
        }
    }
    return fleets    
};

/*****
 * 
 * Calculate the time taken by cars to reach destination
 * 
 * sort in ascending order of distances
 * 
 * no car can takeover first car(closest to target)
 * 
 * now traverse from target side
 *  
 * if some car takes more time than last time, it starts a new fleet
 * 
 * 
 * ***/ 