const TreeNode = require("./TreeNode");

/**
 * Converts sorted array data into
 * a height-balanced Binary Search Tree.
 */
function buildBalancedTreeFromArray(sortedData) {

    function createTree(start, end) {
        if (start > end) {
            return null;
        }

        // Middle element creates the most balanced root
        const middleIndex = Math.floor((start + end) / 2);

        const root = new TreeNode(sortedData[middleIndex]);

        root.left = createTree(start, middleIndex - 1);
        root.right = createTree(middleIndex + 1, end);

        return root;
    }

    return createTree(0, sortedData.length - 1);
}

module.exports = buildBalancedTreeFromArray;
