/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let leftPtr = 0, rightPtr = nums.length - 1;
    while (leftPtr <= rightPtr) {
        let midIdx = Math.floor((rightPtr - leftPtr) / 2) + leftPtr;
        if (nums[midIdx] === target) {
            return midIdx;
        } else if (nums[midIdx] < target) {
            leftPtr = midIdx + 1;
        } else {
            rightPtr = midIdx - 1;
        }
    }

    return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search2 = function(nums, target) {
    let leftPtr = 0, rightPtr = nums.length - 1;
    while (leftPtr < rightPtr) {
        let midIdx = Math.floor((rightPtr - leftPtr) / 2) + leftPtr;
        if (nums[midIdx] === target) {
            return midIdx;
        } else if (nums[midIdx] < target) {
            leftPtr = midIdx + 1;
        } else {
            rightPtr = midIdx;
        }
    }

    return -1;
};

let nums = [-1,0,3,5,9,12], target = 9;
