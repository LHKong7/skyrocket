/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange_dfs1 = function(coins, amount) {
    if (!coins) return -1;
    let res = Number.MAX_SAFE_INTEGER;
    const dfs = (currAmount, depth) => {
        if (currAmount < 0) return;

        if (currAmount === 0) {
            res = Math.min(res, depth);
            return;
        }

        for (let i = 0; i < coins.length; i++) {
            dfs(currAmount - coins[i], depth+1);
        }
    }

    dfs(amount, 0);
    return res === Number.MAX_SAFE_INTEGER ? -1 : res;
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange_dfs2 = function(coins, amount) {
    if (!coins) return -1;
    const dfs = (currAmount) => {
        if (currAmount === 0) {
            return 0;
        }
        let minCoins = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < coins.length; i++) {
            if (currAmount - coins[i] < 0) continue;
            const subMinCoins = dfs(currAmount - coins[i]);
            if (subMinCoins === -1) continue;
            minCoins = Math.min(subMinCoins + 1, minCoins);
        }

        return minCoins === Number.MAX_SAFE_INTEGER ? -1 : minCoins;
    }

    return  dfs(amount);
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange_memo = function(coins, amount) {
    if (!coins) return -1;
    const memo = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
    const dfs = (currAmount) => {
        if (currAmount === 0) {
            return 0;
        }
        if (memo[currAmount] !== Number.MAX_SAFE_INTEGER) {
            return memo[currAmount];
        }
        let minCoins = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < coins.length; i++) {
            if (currAmount - coins[i] < 0) continue;
            const subMinCoins = dfs(currAmount - coins[i]);
            if (subMinCoins === -1) continue;
            minCoins = Math.min(subMinCoins + 1, minCoins);
        }

        memo[currAmount] = minCoins === Number.MAX_SAFE_INTEGER ? -1 : minCoins
        return memo[currAmount];
    }

    return  dfs(amount);
};


/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange_dp = function(coins, amount) {
    if (!coins) return -1;
    const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i >= coin && dp[i - coin] !== Number.MAX_SAFE_INTEGER) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
};
