/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (!nums) {
        return nums;
    }
    const n = nums.length;
    k = k % n; // 防止k大于数组长度
    const res = new Array(n).fill(undefined);
    for (let i = 0; i < n; i++) {
        let nextIdx = (i + k) % n;
        res[nextIdx] = nums[i];
    }

    for (let i = 0; i < n; i++) {
        nums[i] = res[i];
    }
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

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate_inPlace2 = function(nums, k) {
    if (!nums) {
        return nums;
    }
    const n = nums.length;
    k = k % n; // 防止k大于数组长度
    let startIdx = 0;
    let count = 0;

    while (count < n) {
        let currIdx = startIdx
        let prevNum = nums[startIdx];
        do {
            const nextIdx = (currIdx + k) % n;
            const nextNum = nums[nextIdx]; // the temp number
            nums[nextIdx] = prevNum;

            prevNum = nextNum;
            currIdx = nextIdx;
            count++;
        } while (currIdx !== startIdx);
        startIdx++;
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
