/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (!grid) return 0;
    const numRows = grid.length, numCols = grid[0].length;

    const dirs = [[1, 0], [0, 1]];
    let minPath = Number.MAX_SAFE_INTEGER;
    const dfs = (row, col, currPathSum) => {
        let pathSum = currPathSum + grid[row][col];
        if (row === numRows-1 && col === numCols-1) {
            minPath = Math.min(minPath, pathSum);
            return;
        }
        for (let [x, y] of dirs) {
            let nextRow = row + x;
            let nextCol = col + y;
            if (nextRow < numRows && nextCol < numCols) {
                dfs(nextRow, nextCol, pathSum)
            }
        }
    }
    dfs(0, 0, 0);

    return minPath;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum_backtracking = function(grid) {
    if (!grid) return 0;
    const numRows = grid.length, numCols = grid[0].length;

    const dirs = [[1, 0], [0, 1]];
    const dfs = (row, col) => {
        if (row === numRows-1 && col === numCols-1) {
            return grid[row][col];
        }
        let minPathSum = Number.MAX_SAFE_INTEGER;
        for (let [x, y] of dirs) {
            let nextRow = row + x;
            let nextCol = col + y;
            if (nextRow < numRows && nextCol < numCols) {
                let childMinPathSum = dfs(nextRow, nextCol);
                minPathSum = Math.min(minPathSum, childMinPathSum)
            }
        }

        return minPathSum + grid[row][col]
    }

    return dfs(0, 0);
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum_memo = function(grid) {
    if (!grid) return 0;
    const numRows = grid.length, numCols = grid[0].length;
    const memo = new Array(numRows).fill(Number.MAX_SAFE_INTEGER).map(() => new Array(numCols).fill(Number.MAX_SAFE_INTEGER));

    const dirs = [[1, 0], [0, 1]];
    const dfs = (row, col) => {
        if (row === numRows-1 && col === numCols-1) {
            return grid[row][col];
        }

        if (memo[row][col] !== Number.MAX_SAFE_INTEGER) return memo[row][col];
        let minPathSum = Number.MAX_SAFE_INTEGER;
        for (let [x, y] of dirs) {
            let nextRow = row + x;
            let nextCol = col + y;
            if (nextRow < numRows && nextCol < numCols) {
                let childMinPathSum = dfs(nextRow, nextCol);
                minPathSum = Math.min(minPathSum, childMinPathSum)
            }
        }

        memo[row][col] = minPathSum + grid[row][col];
        return memo[row][col];
    }

    return dfs(0, 0);
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum_dp = function(grid) {
    if (!grid) return 0;
    const numRows = grid.length, numCols = grid[0].length;
    const dp = new Array(numRows).fill(0).map(() => new Array(numCols).fill(0));

    // init state
    dp[numRows-1][numCols-1] = grid[numRows-1][numCols-1];

    for (let i = numRows-1; i >= 0; i--) {
        for (let j = numCols-1; j >= 0; j--) {
            if (i === numRows-1 && j !== numCols-1) { // last row
                dp[i][j] = grid[i][j] + dp[i][j+1];
            } else if (j === numCols-1 && i !== numRows-1) {
                dp[i][j] = grid[i][j] + dp[i+1][j];
            } else if (i !== numRows-1 && j !== numCols-1) {
                dp[i][j] = grid[i][j] + Math.min(dp[i+1][j], dp[i][j+1])
            }
        }
    }
    return dp[0][0]
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum_dp_pathCompression = function(grid) {
    if (!grid) return 0;
    const numRows = grid.length, numCols = grid[0].length;
    const dp = new Array(numCols).fill(0);

    // init state
    dp[0] = grid[0][0];

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (i === 0 && j !== 0) {
                dp[j] = grid[i][j] + dp[j-1];
            } else if (i !== 0 && j === 0) {
                dp[j] = grid[i][j] + dp[j];
            } else if (i !== 0 && j !== 0) {
                dp[j] = grid[i][j] + Math.min(dp[j], dp[j-1]);
            }
        }
    }

    return dp[numCols-1]
};
