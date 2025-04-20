
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

//[30,11,23,4,20], h = 5

var minEatingSpeed = function (piles, h) {
    piles.sort((a, b) => a - b)
    let min = 0, max = piles[piles.length - 1]
    let minspeed = max

    for (let speed = min; speed <= max; speed++) {
        let time = 0
        for (const banana of piles) {
            time += Math.ceil(banana / speed)
        }
        if (time <= h) {
            minspeed = Math.min(minspeed, speed)
        }
    }
    return minspeed
}

var minEatingSpeedBinary = function (piles, h) {
    piles.sort((a, b) => a - b);
    let left = 0,
        right = piles[piles.length - 1];
    let minspeed = right;

    while (left <= right) {
        let time = 0;
        const speed = Math.floor((left + right) / 2);
        for (const banana of piles) {
            time += Math.ceil(banana / speed);
        }
        if (time === h) {
            minspeed = speed;
            right = speed - 1;
        } else if (time < h) { // if less time, then decrease speed, to get better time
            minspeed = speed;
            right = speed - 1;
        } else {
            // if time is high, then increase speed
            left = speed + 1;
        }
    }

    return minspeed;
};

/******
 * We want the left most value, because we need minimum speed
 * 
 * 
 * this problems is like traveling distance
 * ****/