/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const n = nums.length;

    let i = n - 2;
    while (i >= 0 && nums[i] >= nums[i+1]) i--;

    if (i >= 0) {
        let j = n - 1;
        while (j >= 0 && nums[j] <= nums[i]) j--;

        // swap nums[i], nums[j], arr[i+1, n) is descending order
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }

    // reverse [i+1, n)
    let leftPtr = i+1, rightPtr = n-1;
    while (leftPtr < rightPtr) {
        [nums[leftPtr], nums[rightPtr]] = [nums[rightPtr], nums[leftPtr]];
        leftPtr++;
        rightPtr--;
    }
};
