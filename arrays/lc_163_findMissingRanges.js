/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    const res = [];

    let pre = lower-1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === pre+2) { // 缺少一个元素
            res.push([pre+1, pre+1]);
        } else if (nums[i] > pre+2) {
            res.push([pre+1, nums[i]-1]);
        }

        pre = nums[i];
    }

    if (upper === pre + 1) {
        res.push([pre+1, pre+1])
    } else if (upper > pre + 1) {
        res.push([pre+1, upper])
    }
    return res;
};
