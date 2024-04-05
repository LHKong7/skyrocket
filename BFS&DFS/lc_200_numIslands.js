/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let res = 0;
    const numRows = grid.length;
    const numCols = grid[0].length;
    const queue = [];
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const currItem = grid[i][j];

            if (currItem === '1') {
                res++;

                queue.push([i, j]);
                while (queue.length) {
                    const [rowIdx, colIdx] = queue.shift();
                    grid[rowIdx][colIdx] = '0';

                    for (const dir of dirs) {
                        const nextRow = rowIdx + dir[0];
                        const nextCol = colIdx + dir[1];

                        if (nextRow >= 0 && nextRow < numRows && nextCol >= 0 && nextCol < numCols && grid[nextRow][nextCol] === '1') {
                            queue.push([nextRow, nextCol]);
                        }
                    }
                }
            }
        }
    }

    return res;
};
