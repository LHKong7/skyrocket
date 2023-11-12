/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    const n = nums.length;
    let changeCount = 0;
    for (let i = 0; i < n-1; i++) {
        let currNum = nums[i], nextNum = nums[i+1];

        if (currNum > nextNum) {
            changeCount++;

            if (changeCount > 1) return false;
            if (nums[i+1] < nums[i-1]) {
                nums[i+1] = nums[i];
            }
            // else { // not necessary
            //     nums[i] = nums[i+1];
            // }
        }
    }
    return true;
};
