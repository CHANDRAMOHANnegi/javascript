var maxSlidingWindow = function (nums, k) {

    const que = []; // stores indices of elements, in Decreasing order, so we can get largest element in window
    const res = []; // result array to store max of each window

    let left = 0, right = 0;

    // Traverse the array
    while (right < nums.length) {
        // Remove indices of elements smaller than nums[right] from the back
        while (que.length && nums[right] > nums[que[que.length - 1]]) {
            que.pop();
        }

        // Add the current index to the deque
        que.push(right);


        // If we've hit the window size, capture the maximum (nums[que[0]])
        if (right - left + 1 === k) {
            /****
             * why we are not removing "que[0]" from que, 
             * because that largest number can be largest for current window as well
             * **/
            res.push(nums[que[0]]);
            left++; // Move the window forward
            // when we are moving window ahead, we do not have to remove from queue


            // Remove the front of the deque if it's out of bounds of the window
            // after we move past window
            if (que[0] < left) {// if greatest index is outside bound
                que.shift();
            }

        }

        // Move the right pointer forward
        right++;
    }

    return res;
};