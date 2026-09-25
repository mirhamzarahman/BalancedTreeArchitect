const buildBalancedTreeFromArray = require("../src/arrayTreeBuilder");

const dataset = [-10, -3, 0, 5, 9];

const balancedTree = buildBalancedTreeFromArray(dataset);

console.log(JSON.stringify(balancedTree, null, 2));
