// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(data, curr = this) {
		if (data < curr.data) {
			if (!curr.left) {
				curr.left = new Node(data);
				return;
			}
			return this.insert(data, curr.left);
		}

		if (!curr.right) {
			curr.right = new Node(data);
			return;
		}

		return this.insert(data, curr.right);
	}

	contains(data, curr = this) {
		if (!curr) return null;
		if (curr.data === data) return curr;
		if (curr.data > data) return this.contains(data, curr.left);
		return this.contains(data, curr.right);
	}
}

module.exports = Node;
