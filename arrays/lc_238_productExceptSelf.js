/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const res = [];
    res[0] = 1;

    for (let i = 1; i < n; i++) {
        res[i] = nums[i - 1] * res[i - 1]; 
    }

    let right = 1;
    for (let i = n-1; i >= 0; i--) {
        res[i] = res[i] * right;
        right *= nums[i];
    }

    return res;
};
