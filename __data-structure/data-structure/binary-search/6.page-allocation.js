//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let x = parseInt(readLine());
        let obj = new Solution();
        let res = obj.findPages(arr, x);
        console.log(res);
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {

    noOfStudents(arr, maxPages) {
        let students = 1; // Start with one student
        let currentSum = 0; // Sum of pages allocated to the current student

        for (let pages of arr) {
            // If the current book cannot be added without exceeding maxPages
            if (currentSum + pages > maxPages) {
                students++; // Need a new student
                currentSum = pages; // Start a new student's page count
            } else {
                currentSum += pages; // Add book pages to current student
            }
        }

        return students; // Return total number of students required
    }

    // Function to find minimum number of pages.
    findPages(arr, k) {
        if (k > arr.length) return -1
        // arr.sort((a,b)=>a-b)
        /***
         * Sorting will destroy the order , we want to gives continuous order
         * 
         * ****/ 

        let left = Math.max(...arr); // Minimum possible maxPages is the largest book, right = arr.reduce((all,pages)=> all + pages,0)
        let right = arr.reduce((sum, pages) => sum + pages, 0); // Max possible is the total of all pages

        let result = -1

        while (left <= right) {
            const mid = Math.floor((left + right) / 2); // Mid-point as our current guess for maxPages
            const studentsRequired = this.noOfStudents(arr, mid); // Calculate the number of students needed

            if (studentsRequired <= k) {
                // If we can allocate within maxPages for k students, try minimizing further
                result = mid;
                right = mid - 1;
            } else {
                // If allocation fails, increase maxPages
                left = mid + 1;
            }
        }
        // console.log(maxPages)
        return result// = mid
    }
}