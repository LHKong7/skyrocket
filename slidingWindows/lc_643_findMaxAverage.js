/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    const n = nums.length;

    let maxSum = Number.MIN_SAFE_INTEGER;
    let leftPtr = 0, rightPtr = 0;
    let currSum = 0;
    while (rightPtr < n) {
        currSum += nums[rightPtr];

        if (rightPtr - leftPtr + 1 === k) {
            maxSum = Math.max(maxSum, currSum);
            currSum -= nums[leftPtr];
            leftPtr++
        }
        rightPtr++;
    }

    return maxSum/k;
};
