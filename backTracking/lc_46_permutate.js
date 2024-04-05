/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (!nums) return [];

    const res = [];
    const n = nums.length;
    const store = new Array(n).fill(false);

    const dfs = (routes, res, target, nums, store) => {
        if (routes.length === target) {
            res.push([...routes]);
            return;
        }
    
        for (let i = 0; i < target; i++) {
            if (store[i]) continue;
            routes.push(nums[i]);
            store[i] = true;
            dfs(routes, res, target, nums, store);
            store[i] = false;
            routes.pop();
        }
    };

    dfs([], res, n, nums, store);

    return res;
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute_inPlace = function(nums) {
    const n = nums.length;
    const res = [];

    const backTrack = (startIdx) => {
        if (startIdx === n) {
            res.push([...nums]);
            return;
        }

        for (let i = startIdx; i < n; i++) {
            [nums[startIdx], nums[i]] = [nums[i], nums[startIdx]];
            backTrack(startIdx + 1); // startIdx + 1 is the next index to be swapped
            [nums[startIdx], nums[i]] = [nums[i], nums[startIdx]];
        }
    }
    backTrack(0);
    return res;
};
const res = permute_inPlace([1, 2, 3]);
console.log("res: ", res)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute_v1 = function(nums) {
    const n = nums.length;
    const hasSeen = new Array(n).fill(false);
    const res = [];
    const dfs = (routes, startIndex) => {
        if (routes.length === n) {
            res.push([...routes]);
        }

        for (let i = 0; i < n; i++) {
            if (hasSeen[i]) continue;
            routes.push(nums[i]);
            hasSeen[i] = true;
            dfs(routes);
            routes.pop();
            hasSeen[i] = false;
        }
    }

    dfs([], 0);
    return res;
};
