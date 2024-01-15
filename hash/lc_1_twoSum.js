/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (!nums) return [-1, -1];

    const idxStore = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (idxStore.has(target - nums[i])) {
            return [idxStore.get(target - nums[i]), i];
        }

        idxStore.set(nums[i], i);
    }

    return [-1, -1];
};
