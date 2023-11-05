// 子数组的数量：
var countSubarrays = (arr) => {
    const n = arr.length;

    return n * (n + 1) / 2;
}

// 找到数组中的所有子数组:
var findAllSubarrays = (arr) => {
    const subArrays = [];

    for (let i = 0; i< arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            subArrays.push(arr.slice(i, j + 1));
        }
    }

    return subArrays;
}

// 最大子数组之和: Brute Force
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray_BF = function(nums) {
    const n = nums.length;
    let maxSum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let subArrSum = 0;

            for (let k = i; k <= j; k++) {
                subArrSum += nums[k];
            }

            maxSum = Math.max(maxSum, subArrSum)
        }
    }

    return maxSum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray_BF2 = function(nums) {
    const n = nums.length;
    let maxSum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < n; i++) {
        let subArrSum = 0;
        for (let j = i; j < n; j++) {
            subArrSum += nums[j];

            maxSum = Math.max(maxSum, subArrSum)
        }
    }

    return maxSum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray_DP = function(nums) {
    if (!nums) return 0;
    if (nums.length === 1) return nums[0];

    const n = nums.length;
    let maxSum = Number.MIN_SAFE_INTEGER;
    const dp = new Array(n).fill(Number.MIN_SAFE_INTEGER).map(() => new Array(n).fill(Number.MIN_SAFE_INTEGER));

    for (let i = 0; i < n; i++) {
        dp[i][i] = nums[i];
        maxSum = Math.max(maxSum, dp[0][i]);
    }

    for (let i = 1; i < n; i++) {
        dp[0][i] = dp[0][i-1] + nums[i];
        maxSum = Math.max(maxSum, dp[0][i]);
    }

    for (let i = 1; i < n; i++) {
        for (let j = i; j < n; j++) {
            // i -> j
            dp[i][j] = dp[i-1][j] - dp[i-1][i-1];
            maxSum = Math.max(maxSum, dp[i][j]);
        }
    }

    return maxSum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray_compression = function(nums) {
    if (!nums) return 0;

    const n = nums.length;
    const dp = new Array(n).fill(Number.MIN_SAFE_INTEGER);
    dp[0] = nums[0];
    let maxSum = dp[0];
    for (let i = 1; i < n; i++) {
        dp[i] = dp[i-1] + nums[i];
        maxSum = Math.max(maxSum, dp[i]);
    }

    for (let i = 1; i < n; i++) {
        dp[i] = dp[i-1] + nums[i];
        maxSum = Math.max(maxSum, dp[i]);
    }

    for (let i = 1; i < n; i++) {
        for (let j = i; j < n; j++) {
            // i -> j
            dp[j] = dp[j] - dp[i-1];
            maxSum = Math.max(maxSum, dp[j]);
        }
    }

    return maxSum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray_prefixSum = function(nums) {
    if (!nums) return 0;

    const n = nums.length;
    const prefixSum = new Array(n).fill(Number.MIN_SAFE_INTEGER);
    prefixSum[0] = nums[0];
    let maxSum = prefixSum[0];

    for (let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i-1] + nums[i];
        maxSum = Math.max(maxSum, prefixSum[i]);
    }

    for (let i = 1; i < n; i++) {
        for (let j = i; j < n; j++) {
            // i -> j
            let sum = prefixSum[j] - prefixSum[i-1];
            maxSum = Math.max(maxSum, sum);
        }
    }

    return maxSum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums) return 0;

    const n = nums.length;
    const dp = new Array(n).fill(Number.MIN_SAFE_INTEGER);
    dp[0] = nums[0];
    let maxSum = dp[0];

    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(dp[i-1] + nums[i], nums[i]);
        maxSum = Math.max(maxSum, dp[i]);
    }

    return maxSum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums) return 0;

    const n = nums.length;
    let preMax = nums[0];
    let maxSum = preMax;

    for (let i = 1; i < n; i++) {
        preMax = Math.max(preMax + nums[i], nums[i]);
        maxSum = Math.max(maxSum, preMax);
    }

    return maxSum;
};
