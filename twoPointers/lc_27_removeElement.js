/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const n = nums.length;
    let left = 0, right = 0;

    while (right < n) {
        if (nums[right] !== val) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
        right++;
    }

    return left;
};
