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
var inorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    
    let result = [];
    
    
    if (!root.val) {
        return result;
    }
    
    let current = root;
    
    if (current.left) {
        result = result.concat(inorderTraversal(current.left))
    }
    
    result.push(current.val)
    
    if (current.right) {
        result = result.concat(inorderTraversal(current.right))
    }
    
    return result;
};