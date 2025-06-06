/**
 * @param {number} maxTime
 * @param {number[][]} edges
 * @param {number[]} passingFees
 * @return {number}
 */

/**
1. multiple edges between teo roads

*/

const createGraph = (edges) => {
    const graph = {}

    for (const [u, v, t] of edges) {
        if (!graph[u]) graph[u] = {}
        if (!graph[v]) graph[v] = {}
        graph[u][v] = Math.min(t, graph[u][v] ?? Infinity)
        graph[v][u] = Math.min(t, graph[v][u] ?? Infinity)
    }

    return graph
}

var minCost = function (maxTime, edges, passingFees) {

    const n = passingFees.length

    const journey = {} // store best time and cost
    const graph = createGraph(edges)
    console.log(graph);
    

    const nodes = Object.keys(graph) // keep track of nodes visited

    nodes.forEach(node => {
        journey[node] = [node, Infinity, Infinity] // cost, time
    })

    journey[0] = [0, passingFees[0], 0]

    while (nodes.length) {
        nodes.sort((a, b) => {
            const [, acost, atime] = journey[a]
            const [, bcost, btime] = journey[b]
            if (acost < bcost && atime < btime) {
                return -1
            } else {
                return 1
            }
        })// priority queue

        const [node, cost, time] = journey[nodes.shift()]

        for (const nbr of Object.keys(graph[node])) {
            const newCost = cost + passingFees[nbr]
            const newTime = time + graph[node][nbr]
            const [, nbrcost, nbrtime] = journey[nbr]

            // console.log(journey[nbr],node, cost,time, newCost,newTime);
            

            if (newTime <= Math.min(nbrtime, maxTime) && newCost <= nbrcost) {
                journey[nbr] = [nbr, newCost, newTime]
            }
        }
    }

    console.log(journey);
    

    return journey[n - 1][1] != Infinity ? journey[n - 1][1] : -1
};

// const maxTime = 500;
// const eedges = [[31,36,19],[5,19,32],[2,17,40],[13,25,4],[9,18,31],[10,40,19],[34,43,46],[7,44,42],[7,37,2],[37,44,43],[27,9,36],[20,31,44],[36,25,16],[20,49,31],[17,13,18],[30,13,25],[18,22,50],[1,0,44],[15,19,21],[14,38,48],[31,11,31],[43,9,2],[6,34,25],[38,23,3],[42,8,12],[47,29,18],[15,49,1],[40,11,26],[48,11,39],[32,30,37],[34,26,16],[46,22,15],[14,34,45],[15,22,42],[35,13,31],[5,4,46],[12,27,5],[13,27,16],[49,13,2],[7,42,42],[46,9,5],[2,40,24],[20,16,9],[10,11,25],[17,22,50],[42,23,27],[41,42,35],[13,39,10],[28,11,36],[47,3,33],[24,42,50],[26,29,22],[48,7,33],[42,39,25],[33,8,46],[45,43,20],[43,20,39],[6,27,4],[4,6,50],[49,11,15],[30,44,21],[30,19,5],[3,11,34],[41,7,16],[37,33,9],[2,1,21],[5,46,7],[10,32,14],[4,43,12],[37,27,40],[6,8,15],[1,23,9],[1,15,43],[20,34,41],[17,11,50],[39,48,4],[46,9,11],[24,0,3],[21,9,17],[32,30,39],[37,4,32],[16,14,12],[35,42,18],[26,17,50],[7,37,9],[45,37,22],[30,29,42],[7,34,47],[9,29,7],[43,24,6],[13,18,15],[10,34,11],[45,8,18],[45,1,5],[17,9,28],[37,35,18],[42,15,5],[37,6,26],[0,14,49],[12,44,33],[35,45,21],[21,26,2],[32,42,26],[36,48,26],[35,7,50],[9,15,16],[4,2,11],[47,45,29],[41,4,13],[38,25,31],[10,38,9],[23,41,23],[9,37,10],[29,18,38],[45,25,25],[22,20,26],[28,9,15],[41,40,32],[24,8,19],[25,0,25],[6,28,46],[8,35,46],[25,7,46],[21,11,37],[14,28,21],[3,1,24],[33,24,31],[24,26,7],[39,47,31],[0,24,36],[21,48,24],[37,7,3],[15,46,3],[24,20,49],[5,39,17],[8,1,23],[3,28,42],[1,19,30],[41,22,39],[34,39,15],[13,28,19],[28,21,48],[7,3,13],[23,48,36],[5,8,19],[25,0,35],[25,22,48],[2,37,33],[2,33,13],[40,5,35],[13,45,30],[1,18,40],[2,39,12],[23,8,20],[3,22,8],[6,43,21],[11,3,24],[3,47,47],[10,19,37],[20,23,14],[7,0,39],[10,3,40],[34,27,29],[29,25,46],[22,33,48],[11,47,40],[10,15,35],[42,39,28],[37,23,4],[37,5,1],[48,2,32],[13,5,33],[49,11,35],[27,0,20],[41,7,23],[1,35,4],[9,22,9],[20,25,45],[19,47,46],[11,12,15],[42,18,49],[19,1,5],[28,23,48],[42,4,36],[48,12,11],[32,44,2],[49,39,15],[45,39,34],[11,8,1],[26,43,36],[32,31,39],[49,42,47],[9,13,24],[30,40,2],[17,32,12],[35,40,22],[43,2,13],[23,32,23],[48,22,13],[6,24,4],[48,5,41],[18,3,5],[46,37,21],[13,29,42],[22,44,37],[3,24,6],[21,4,42],[37,32,8],[38,42,27],[30,1,28],[6,21,22],[33,21,38],[12,42,47],[13,32,33],[35,33,20],[37,1,33],[27,39,14],[10,9,1],[40,45,48],[6,32,9],[30,44,16],[36,42,20],[11,32,23],[16,19,1],[21,11,39],[45,9,23],[11,48,22],[33,23,38],[8,45,1],[40,33,28],[30,10,18],[5,25,33],[34,4,16],[34,21,22],[35,22,9],[34,7,35],[4,9,43],[48,25,36],[34,4,36],[13,12,11],[49,46,40],[49,34,41],[32,27,16],[25,41,39],[22,6,26],[34,0,11],[42,11,22],[40,14,16],[23,19,19],[4,36,26],[23,48,29],[38,32,13],[16,33,28],[46,23,23],[2,47,19],[13,6,48],[10,31,24],[17,2,41],[33,37,3],[17,39,31],[32,28,14],[3,7,28],[45,4,50],[43,33,20],[35,45,28],[41,47,17],[36,25,8],[32,40,6],[27,24,46],[11,29,50],[9,7,29],[11,30,29],[37,16,47],[19,12,39],[36,41,20],[15,44,32],[13,0,44],[23,26,26],[23,20,26],[38,8,44],[15,5,48],[11,0,25],[32,15,40],[30,32,2],[35,2,46],[32,6,11],[39,3,40],[20,9,39],[9,10,15],[45,14,7],[20,32,27],[36,33,46],[27,0,23],[7,25,22],[25,40,3],[22,3,38],[44,42,46],[16,35,3],[5,32,20],[34,12,50],[43,9,44],[28,21,33],[34,47,4],[38,34,17],[23,49,4],[24,27,4],[30,3,36],[1,41,5],[38,20,37],[9,6,45],[32,19,14],[15,21,22],[42,40,37],[21,32,32],[4,2,34],[30,2,34],[39,12,15],[46,17,30],[47,22,5],[20,31,45],[21,48,46],[49,34,36],[29,32,36],[37,39,45],[17,13,15],[39,3,37],[12,38,16],[23,32,18],[0,9,9],[4,19,37],[25,24,27],[44,39,42],[37,32,31],[45,5,22],[47,36,42],[32,6,9],[31,30,1],[37,41,19],[12,10,9],[10,21,9],[35,1,30],[23,21,17],[33,10,37],[21,10,37],[27,45,16],[23,22,45],[9,43,21],[13,24,43],[44,36,29],[18,36,40],[2,39,16],[33,8,3],[23,13,4],[24,42,33],[18,11,27],[9,8,11],[34,22,11],[44,30,22],[23,6,7],[48,42,45],[20,21,19],[21,3,31],[41,12,39],[23,42,38],[5,39,32],[37,31,3],[23,12,15],[27,16,49],[30,35,3],[41,46,37],[44,18,27],[17,36,30],[1,36,12],[34,9,15],[10,17,27],[23,27,36],[36,42,36],[38,46,45],[46,9,4],[28,36,7],[9,24,28],[49,48,33],[9,18,2],[17,26,9],[30,34,39],[18,11,7],[37,27,6],[16,39,4],[33,1,37],[12,48,37],[26,14,39],[4,42,42],[35,46,42],[28,31,25],[48,24,27],[37,13,19],[20,21,20],[34,30,37],[31,7,33],[48,49,5],[5,30,22],[9,4,43],[33,15,7],[27,35,20],[12,5,41],[14,4,40],[44,11,49],[35,6,42],[26,12,45],[3,1,48],[28,31,11],[10,8,29],[14,18,45],[7,4,14],[14,8,7],[17,34,20],[29,41,41],[3,0,3],[29,18,1],[41,5,9],[5,28,13],[49,21,38],[16,13,39],[19,10,34],[39,32,20],[26,29,24],[31,34,19],[23,31,42],[13,25,47],[27,15,32],[15,31,33],[31,11,29],[40,27,27],[16,22,25],[22,1,42],[31,2,11],[31,4,33],[6,3,21],[11,39,29],[15,7,2],[22,6,13],[10,42,43],[37,15,48],[4,38,50],[20,34,24],[33,19,15],[42,26,26],[37,35,34],[22,23,24],[7,27,10],[6,4,44],[11,14,20],[8,2,18],[25,44,25],[42,15,44],[24,26,34],[12,3,24],[28,34,29],[24,30,2],[1,39,1],[6,3,26],[38,11,13],[46,23,1],[2,46,41],[32,40,43],[48,40,15],[17,39,5],[25,34,8],[42,38,2],[25,28,10],[37,20,28],[29,2,29],[43,21,29],[25,17,23],[27,23,36],[15,40,41],[20,1,12],[0,16,49],[35,32,15],[14,42,12],[45,13,4],[36,8,36],[1,13,21],[28,12,12],[41,32,48],[22,28,7],[29,47,31],[26,4,17],[37,11,21],[39,12,35],[5,33,12],[20,14,4],[2,33,47],[16,14,13],[30,34,3],[33,29,13],[40,15,17],[32,24,34],[38,22,17],[5,26,10],[45,31,26],[19,5,29],[20,14,21],[34,19,9],[19,41,38],[46,19,48],[11,20,10],[34,4,16],[1,29,26],[5,46,24],[16,15,14],[29,8,45],[44,19,3],[21,3,30],[43,47,37],[17,31,7],[43,39,20],[44,40,10],[31,45,29],[5,1,25],[12,17,19],[14,18,46],[15,35,45],[48,11,14],[7,2,8],[28,34,4],[41,30,43],[22,29,49],[23,16,20],[41,22,48],[19,37,48],[12,20,23],[23,21,42],[25,34,28],[17,46,27],[20,26,8],[2,46,13],[28,2,22],[47,21,44],[15,27,11],[33,6,17],[44,15,41],[20,10,18],[46,15,14],[32,10,9],[25,49,30],[15,44,50],[41,24,23],[29,22,15],[25,29,40],[36,44,13],[8,9,1],[48,9,9],[13,12,5],[45,18,7],[31,1,7],[28,14,18],[20,42,48],[3,20,11],[30,4,49],[29,8,37],[30,46,37],[38,16,44],[7,36,42],[0,45,8],[20,38,8],[28,32,27],[1,41,45],[8,28,26],[32,34,39],[12,31,18],[26,4,34],[37,3,14],[17,33,13],[34,21,16],[46,16,49],[38,39,41],[20,24,14],[38,21,15],[28,10,38],[35,20,18],[29,4,13],[30,3,48],[35,10,45],[2,23,37],[3,23,32],[3,6,39],[36,31,18],[37,6,40],[28,15,45],[24,42,31],[16,19,32],[9,31,8],[46,35,48],[0,2,28],[26,0,19],[36,14,40],[7,11,25],[3,49,21],[36,33,1],[43,8,38],[46,20,29],[35,37,30],[49,28,39],[38,48,3],[23,9,17],[4,49,28],[44,33,18],[6,17,47],[25,29,8],[3,27,47],[36,17,12],[25,34,14],[30,23,2],[8,40,7],[25,3,38],[44,0,47],[37,12,38],[5,28,42],[36,2,46],[5,39,16],[7,27,41],[26,47,11],[27,23,15],[4,8,50],[14,11,20],[32,9,21],[2,0,31],[41,17,47],[29,9,24],[4,37,35],[43,44,14],[27,8,22],[47,2,28],[19,24,1],[40,0,1],[29,21,40],[7,5,48],[0,21,8],[18,9,10],[36,0,13],[12,27,29]]
// const passingFees=[274,630,138,293,592,832,255,72,877,611,272,59,956,23,443,626,989,290,864,487,433,447,861,829,70,190,220,787,696,35,954,653,844,776,440,977,870,425,364,964,364,524,933,152,184,809,232,235,830,965]

// console.log(minCost(30, [[0, 1, 10], [1, 2, 10], [2, 5, 10], [0, 3, 1], [3, 4, 10], [4, 5, 15]], [5, 1, 2, 20, 20, 3]));
// console.log(minCost(maxTime,eedges,passingFees));
