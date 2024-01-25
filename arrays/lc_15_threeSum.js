/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const res = [];

    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }

        let third = n - 1;
        let target = -nums[i];

        for (let second = i + 1; second < n; second++) {
            if (second > i + 1 && nums[second] === nums[second - 1]) {
                continue;
            }

            while (second < third && nums[second] + nums[third] > target) {
                third--;
            }

            if (second === third) break;

            if (nums[second] + nums[third] === target) {
                res.push([nums[i], nums[second], nums[third]]);
            }
        }
    }

    return res;
};