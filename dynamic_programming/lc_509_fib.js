/**
 * @param {number} n
 * @return {number}
 */
var fib_recursion = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fib(n-2) + fib(n-1);
};

/**
 * @param {number} n
 * @return {number}
 */
var fib_memo = function(n) {
    const memoList = [];
    const dfs = (n) => {
        if (n === 0) return 0;
        if (n === 1) return 1;
        if (memoList[n]) return memoList[n];

        let leftFib = dfs(n-1);
        let rightFib = dfs(n-2);
        memoList[n] = leftFib + rightFib;

        return leftFib + rightFib;
    }

    return dfs(n);
};

/**
 * @param {number} n
 * @return {number}
 */
var fib_dp = function(n) {
    const MOD = 1000000007;
    const dp = [];
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i-2] + dp[i-1]) % MOD;
    }

    return dp[n];
};
