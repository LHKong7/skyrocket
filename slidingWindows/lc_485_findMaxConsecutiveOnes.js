/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    const n = nums.length;

    let leftPtr = 0, rightPtr = 0;
    let res = 0;
    while (rightPtr < n) {
        let num = nums[rightPtr];

        if (num === 0) {
            res = Math.max(res, rightPtr-leftPtr);
            leftPtr = rightPtr + 1;
        }
        rightPtr++;
    }

    return Math.max(res, rightPtr-leftPtr);
};
