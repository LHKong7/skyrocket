/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length;
    let res = 0;

    const leftCandies = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i-1]) {
            leftCandies[i] = leftCandies[i-1] + 1;
        }
    }

    let currRightCandy = 1;
    for (let i = n-1; i >= 0; i--) {
        if (i < n-1 && ratings[i] > ratings[i+1]) {
            currRightCandy++
        } else {
            currRightCandy = 1;
        }

        res += Math.max(currRightCandy, leftCandies[i]);
    }

    return res;
};
