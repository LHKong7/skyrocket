var maxAncestorDiff_TopDown = function(root) {
    if (!root) return 0;

    let res = 0;
    const dfs = (tNode, minV, maxV) => {
        if (!tNode) {
            res = Math.max(res, maxV - minV);
            return;
        }
        let maxVal = Math.max(maxV, tNode.val);
        let minVal = Math.min(minV, tNode.val);

        dfs(tNode.left, minVal, maxVal);
        dfs(tNode.right, minVal, maxVal);
    }

    dfs(root, root.val, root.val);
    return res;
};


var maxAncestorDiff_BottomUp = function(root) {
    function dfs(root, mi, ma) {
        if (root === null) {
            return 0;
        }
        var diff = Math.max(Math.abs(root.val - mi), Math.abs(root.val - ma));
        mi = Math.min(mi, root.val);
        ma = Math.max(ma, root.val);
        diff = Math.max(diff, dfs(root.left, mi, ma));
        diff = Math.max(diff, dfs(root.right, mi, ma));
        return diff;
    }

    return dfs(root, root.val, root.val);
};
