/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        const num = (nums[i] - 1) % n;
        nums[num] += n;
    }

    const res = [];
    for (const [i, num] of nums.entries()) {
        if (num <= n) {
            res.push(i + 1);
        }
    }
    return res;
};
