/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxF = nums[0];
    let minF = nums[0];
    let res = nums[0];
    const n = nums.length;

    for (let i = 1; i < n; i++) {
        let mx = maxF, mn = minF;
        maxF = Math.max(mx * nums[i], Math.max(nums[i], mn * nums[i]));
        minF = Math.min(mn * nums[i], Math.min(nums[i], mx * nums[i]));
        res = Math.max(maxF, res)
    }

    return res;
};
