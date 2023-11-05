/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0;

    const dfs = (tNode) => {
        if (!tNode) return 0;
        if (!tNode.left && !tNode.right) return 1;

        let leftDepth = dfs(tNode.left);
        let rightDepth = dfs(tNode.right);

        return (leftDepth === 0 || rightDepth === 0) ? leftDepth + rightDepth + 1 : Math.min(leftDepth, rightDepth) + 1;
    }
    const res = dfs(root);
    return res;
};
