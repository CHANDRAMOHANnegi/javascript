

// Input:
// N = 6
// start[] = {1,3,0,5,8,5}
// end[] =  {2,4,6,7,9,9}
// Output: 
// 4


class Solution {
    //Function to find the maximum number of meetings that can
    //be performed in a meeting room.
    maxMeetings(start, end, n) {

        let arr = []
        // [startTime, endTime, index]

        /*****
         * 1. store the data in array
         * 2. sort the data by endTime, and index (if endTime are same)
         * ***/ 

        for (let i = 0; i < n; i++) {
            let subArr = [start[i], end[i], i + 1]
            arr.push(subArr)
        }

        arr.sort((a, b) => {
            // sorting based on meeting ending time
            if (a[1] > b[1]) return 1
            if (a[1] < b[1]) return -1

            // index based sorting
            if (a[1] === b[1]) {
                if (a[2] > b[2]) return 1
                if (a[2] < b[2]) return -1
            }

            return 0
        })

        let lastEndMeet = -1
        let count = 0

        for (let i = 0; i < arr.length; i++) {
            if (arr[i][0] > lastEndMeet) {
                count++;
                lastEndMeet = arr[i][1]
            }
        }

        return count

    }
}


