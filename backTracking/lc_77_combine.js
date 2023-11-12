/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];

    const dfs = (curr, n, k, routes) => {
        if (routes.length + (n-curr+1) < k) return;
        if (routes.length === k) {
            res.push([...routes]);
            return;
        }

        dfs(curr+1, n, k, [...routes, curr]);
        dfs(curr+1, n, k, routes);
    }
    dfs(1, n, k, []);
    return res;
};
