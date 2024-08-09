/**
 * @param {Job[]} arr
 * @param {number} n
 * @returns {number[]}
*/

/*
class Job{
    constructor(id, dead, profit){
        this.id = id;
        this.dead = dead;
        this.profit = profit;
    }
}
*/

class Solution 
{
    //Function to find the maximum profit and the number of jobs done.
    JobScheduling(arr, n)
    {   

        /****
         * sort job in decreasing order of profit
         * */ 
        arr.sort((jobA,jobB)=>jobB.profit - jobA.profit)
        
        let deads = Array.from({ length: n },()=> -1)
        
        let totalProfit = 0
        let jobDone = 0
        
        arr.forEach(job=>{
            const {dead,profit,id} = job
                let i = dead - 1
                while(i>=0){
                    if(deads[i] === -1){
                        jobDone++
                        totalProfit+=profit
                        deads[i] = id
                        break;
                    }
                    i--
                }
        })
        return [jobDone,totalProfit]
    }
}