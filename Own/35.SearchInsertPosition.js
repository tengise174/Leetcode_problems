/** ===Completed=== */

/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0, right = nums.length - 1;
    if (target < nums[left]) return 0;
    if (target > nums[right]) return nums.length;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        // let mid = (left + right) >> 1;
        if (target === nums[mid]) return mid;
        else if (target < nums[mid]) right = mid - 1;
        else left = mid + 1;
    }
    return left;
};

// console.log(searchInsert([1, 3, 5, 6], 5));  // == 2
console.log(searchInsert([1, 3, 5, 6], 2));  // == 1
// console.log(searchInsert([1, 3, 5, 6], 7));   // == 4
