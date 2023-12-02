/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const n = nums.length;
    const res = [];
    for (let i = 0; i < n; i++) {
        let currNum = Math.abs(nums[i]);
        let identifierIdx = currNum - 1;
        
        if (nums[identifierIdx] > 0) {
            nums[identifierIdx] = -nums[identifierIdx]
        } else {
            res.push(currNum);
        }
    }
    return res;
};

exports.module = {
    findDuplicates,
}
