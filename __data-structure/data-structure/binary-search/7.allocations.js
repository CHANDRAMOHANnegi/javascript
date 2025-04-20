
// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {

    noOfStudents(pages, maxPagesAllowed) {
        let student = 1
        let currentPages = 0

        for (const page of pages) {
            if (currentPages + page > maxPagesAllowed) {
                /***
                 * here i did
                 * if (currentPages > maxPagesAllowed) 
                 * but we should not let currentPages exceed maxPagesAllowed,
                 * we have to stop before that
                 * ***/
                currentPages = page
                student++
            } else {
                currentPages += page
            }
        }

        return student
    }

    // Function to find minimum number of pages.
    findPages(arr, k) {
        if (k > arr.length) return -1
        let left = Math.max(...arr), right = arr.reduce((all, ele) => all + ele, 0)

        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            const students = this.noOfStudents(arr, mid)

            if (students <= k) {
                /****
                 * why are we considering (students < k)
                 * because if (students < k) are able to distribute pages, 
                 * then we can distribute these books among other remaining students
                 * 
                 * ! no of books >= no of students
                 * 
                 * DEEP-SEEK
                 * this point is VERY important and deep
                 * 
                 * *****/
                right = mid - 1
            }
            else {
                left = mid + 1
            }
        }
        return left
    }
}

/****
 * 
 * The condition count <= k ensures that even if the initial grouping has fewer groups than k, 
 * we can always split existing groups into smaller contiguous parts (down to single books) to meet the required k groups.
 * */ 