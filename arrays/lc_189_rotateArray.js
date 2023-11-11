/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
    if (!nums) {
        return nums;
    }

    const n = nums.length;
    const res = new Array(n).fill(undefined);
    for (let i = 0; i < n; i++) {
        const rotatedIdx = (i + k) % n;
        res[rotatedIdx] = nums[i];
    }

    return res;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate_inPlace = function(nums, k) {
    if (!nums) {
        return nums;
    }

    const n = nums.length;
    let count = 0; // 处理元素个数
    for (let start = 0; count < n; start++) {
        let curr = start;
        let prev = nums[start];

        do {
            let nextIdx = (curr + k) % n;
            let temp = nums[nextIdx];
            nums[nextIdx] = prev;

            prev = temp;
            curr = nextIdx;
            count++;
        } while (start !== curr)
    }
};

var rotate_reverse = function(nums, k) {
    const reverse = (nums, start, end) => {
        while (start < end) {
            const temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start += 1;
            end -= 1;
        }
    }
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};

module.exports = {
    rotate
}
