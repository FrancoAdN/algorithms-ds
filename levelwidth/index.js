// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	const counter = [];
	let arr = [root];
	let tempArr = [];
	let levelWidth = 0;
	while (arr.length) {
		levelWidth++;
		const node = arr.shift();
		tempArr.push(...node.children);
		if (arr.length === 0) {
			counter.push(levelWidth);
			levelWidth = 0;
			arr = tempArr;
			tempArr = [];
		}
	}
	return counter;
}

module.exports = levelWidth;
