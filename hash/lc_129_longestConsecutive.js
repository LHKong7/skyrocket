/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const hashStore = new Set();

    for (let num of nums) {
        hashStore.add(num);
    }

    let res = 0;
    for (let num of nums) {
        if (!hashStore.has(num - 1)) {
            let currNum = num;
            let curr = 1;

            while (hashStore.has(currNum + 1)) {
                currNum++;
                curr++;
            }
            res = Math.max(res, curr);
        }
    }

    return res;
};


