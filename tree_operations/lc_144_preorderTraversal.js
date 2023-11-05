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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const res = [], stk = [];

    while (root || stk.length) {
        while (root) {
            res.push(root.val);
            stk.push(root);
            root = root.left;
        }

        let tNode = stk.pop();
        root = tNode.right;
    }

    return res;
};
