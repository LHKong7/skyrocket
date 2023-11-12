/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let i = 0;
    const n = nums.length;
    const res = [];

    while (i < n) {
        let startIdx = i;
        while (i + 1 < n && (nums[i] === nums[i+1]-1)) {
            i++;
        }

        let endIdx = i;
        if (endIdx > startIdx) {
            res.push(`${nums[startIdx]}->${nums[endIdx]}`);
        } else {
            res.push(`${nums[startIdx]}`)
        }
        i++;
    }

    return res;
};
