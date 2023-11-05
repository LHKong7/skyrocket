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
var maxDepth = function(root) {
    if (!root) return 0;

    let maxDepth = Number.MIN_SAFE_INTEGER;
    const dfs = (tNode, depth) => {
        if (!tNode) return;

        let currDepth = depth + 1;
        maxDepth = Math.min(currDepth, maxDepth);
        if (root.left) dfs(root.left, currDepth);
        if (root.right) dfs(root.right, currDepth);
    }
    dfs(root, 0);
    return maxDepth;
}
