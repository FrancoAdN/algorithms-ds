class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value, current = this.root) {
		if (!current) {
			this.root = new Node(value);
			return;
		}
		if (value < current.value) {
			if (!current.left) {
				current.left = new Node(value);
				return;
			}
			return this.insert(value, current.left);
		}

		if (!current.right) {
			current.right = new Node(value);
			return;
		}

		return this.insert(value, current.right);
	}

	find(value, current = this.root) {
		if (!current) return undefined;
		if (value < current.value) return this.find(value, current.left);
		if (value > current.value) return this.find(value, current.right);
		return current;
	}

	breadthFirst() {
		const data = [],
			queue = [];
		let node = this.root;
		queue.push(node);
		while (queue.length) {
			node = queue.shift();
			data.push(node.value);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return data;
	}

	DFSPreOrder() {
		const data = [];
		function traverse(node) {
			data.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}
		traverse(this.root);
		return data;
	}

	DFSPostOrder() {
		const data = [];
		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			data.push(node.value);
		}
		traverse(this.root);
		return data;
	}

	DFSInOrder() {
		const data = [];
		function traverse(node) {
			if (node.left) traverse(node.left);
			data.push(node.value);
			if (node.right) traverse(node.right);
		}
		traverse(this.root);
		return data;
	}

	remove(val) {
		let delNode;
		const del = (root, val) => {
			if (root === null) return root;
			else if (val > root.value) root.right = del(root.right, val);
			else if (val < root.value) root.left = del(root.left, val);
			else {
				// if node is found
				if (delNode === undefined) delNode = root.value;
				// case 1: no children (leaf)
				if (root.left === null && root.right === null) {
					root = null;
				}

				// case 2: 1 child
				else if (root.left === null) {
					// right child
					root = root.right;
				} else if (root.right === null) {
					// left child
					root = root.left;
				}

				// case 3: 2 children
				else {
					let temp = findMin(root.right); // assign a root to min in a right subtree
					root.value = temp.value;
					root.right = del(root.right, root.value);
				}
			}
			return root;
		};
		const findMin = (root) => {
			if (root === null) return root;
			if (root.left) return findMin(root.left);
			return root;
		};

		this.root = del(this.root, val);
		return delNode;
	}

	findSecondLargest() {
		let fL, sL; // first, second largest values
		const findMax = (root) => {
			if (root === null) return root;
			if (root.right) {
				sL = root;
				return findMax(root.right);
			}
			return root;
		};
		fL = findMax(this.root); // find first largest
		const helper = (root) => {
			if (root === null) return root;
			// if fL has a left subtree,
			// find the largest in this subtree
			if (root.left) {
				sL = findMax(root.left);
			}
			return sL;
		};
		sL = helper(fL);
		if (sL === null) return undefined;
		return sL.value;
	}

	isBalanced() {
		return this._checkHeight(this.root) !== -1;
	}

	_checkHeight(node) {
		if (!node) return 0;
		let leftHeight = this._checkHeight(node.left);
		if (leftHeight === -1) return -1;
		let rightHeight = this._checkHeight(node.right);
		if (rightHeight === -1) return -1;
		let heightDiff = Math.abs(leftHeight - rightHeight);
		if (heightDiff > 1) return -1;
		return Math.max(leftHeight, rightHeight) + 1;
	}
}

module.exports = BSTrees;
