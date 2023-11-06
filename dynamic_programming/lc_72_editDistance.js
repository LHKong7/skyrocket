/**
 * 编辑距离，又名Levenshtein距离，是指两个字符串之间，由一个转成另一个所需的最少编辑操作次数。
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const word1Len = word1.length, word2Len = word2.length;
    if (word1Len * word2Len === 0) {
        return word1Len + word2Len;
    }
    // DP数组中存储的是 word1中前i个字符转换为word2中前j个字符所需的最少操作次数
    const dp = new Array(word1Len + 1).fill(0).map(() => new Array(word2Len + 1).fill(0));
    for (let i = 1; i <= word2Len; i++) {
        dp[0][i] = 1 + dp[0][i-1];
    }

    for (let i = 1; i <= word1Len; i++) {
        dp[i][0] = 1 + dp[i-1][0];
    }

    for (let i = 1; i <= word1Len; i++) {
        for (let j = 1; j <= word2Len; j++) {
            const isCharEqual = word1[i-1] === word2[j-1];

            if (isCharEqual) {
                dp[i][j] = dp[i-1][j-1];
            } else { // 当前字符不相等
                let insertStep = 1 + dp[i][j-1]; // 可以在word1中插入一个字符，使得word1中前i个字符和word2中前j-1个字符相等
                let deleteStep = 1 + dp[i-1][j]; // 可以在word1中删除一个字符，使得word1中前i-1个字符和word2中前j个字符相等
                let replaceStep = 1 + dp[i-1][j-1]; // 可以在word1中替换一个字符，使得word1中前i-1个字符和word2中前j-1个字符相等
                dp[i][j] = Math.min(insertStep, Math.min(deleteStep, replaceStep));
            }
        }
    }

    return dp[word1Len][word2Len];
};

module.exports = {
    minDistance,
}