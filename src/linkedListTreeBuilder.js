const TreeNode = require("./TreeNode");

/**
 * Converts sorted linked-list data into
 * a height-balanced Binary Search Tree.
 */
function buildBalancedTreeFromList(head) {

    function findMiddleNode(node) {
        let previous = null;
        let slow = node;
        let fast = node;

        while (fast && fast.next) {
            previous = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        // Separate left portion
        if (previous) {
            previous.next = null;
        }

        return slow;
    }


    function buildTree(node) {

        if (!node) {
            return null;
        }

        const middle = findMiddleNode(node);

        const root = new TreeNode(middle.value);

        root.left = node === middle 
            ? null 
            : buildTree(node);

        root.right = buildTree(middle.next);

        return root;
    }


    return buildTree(head);
}

module.exports = buildBalancedTreeFromList;
