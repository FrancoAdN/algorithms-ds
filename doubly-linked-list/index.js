class Node {
	constructor(val) {
		this.val = val;
		this.prev = null;
		this.next = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	/**
	 * Adds a node to the end of the DLL
	 * @param {any} val - value to add
	 * @returns {this}
	 */
	push(val) {
		const node = new Node(val);
		this.length += 1;
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		return this;
	}

	/**
	 * Removes the last node of the DLL
	 * @returns {Node} the removed node without connections
	 */
	pop() {
		if (!this.head) return undefined;
		const popped = this.tail;

		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = this.tail.prev;
			this.tail.next = null;
			popped.prev = null;
		}
		this.length--;

		return popped;
	}

	/**
	 * Removes the first node of the DDL
	 * @returns {Node} the removed node without connections
	 */
	shift() {
		if (!this.head) return undefined;
		const shifted = this.head;
		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
			this.head.prev = null;
			shifted.next = null;
		}
		this.length--;
		return shifted;
	}

	/**
	 * Adds a node to the beginning of the DDL
	 * @param {any} val
	 * @returns {this}
	 */
	unshift(val) {
		const node = new Node(val);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.head.prev = node;
			node.next = this.head;
			this.head = node;
		}
		this.length++;
		return this;
	}

	/**
	 * Gets a node by its position
	 * @param {number} index - position of the node
	 * @returns {Node} node found
	 */
	get(index) {
		if (index < 0 || index >= this.length) return null;

		const midpoint = Math.floor(this.length / 2);
		if (index <= midpoint) {
			let count = 0;
			let current = this.head;
			while (count !== index) {
				current = current.next;
				count++;
			}
			return current;
		}

		let count = this.length - 1;
		let current = this.tail;

		while (count !== index) {
			current = current.prev;
			count--;
		}
		return current;
	}

	/**
	 * Updates the value of a given node by its index
	 * @param {number} index - index of node to find
	 * @param {any} val - new value of the node
	 * @returns {boolean} whether the value was updated or not
	 */
	set(index, val) {
		const node = this.get(index);
		if (node) {
			node.val = val;
			return true;
		}
		return false;
	}

	/**
	 * Adds a node on a given position
	 * @param {number} index - index of node to find
	 * @param {any} val - value of the new node
	 * @returns {boolean}
	 */
	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === 0) return this.unshift(val);
		if (index === this.length) return this.push(val);

		const node = new Node(val);
		const beforeNode = this.get(index - 1);
		const afterNode = beforeNode.next;
		node.prev = beforeNode;
		node.next = afterNode;
		beforeNode.next = node;
		afterNode.prev = node;
		this.length++;
		return true;
	}

	/**
	 * Removes a node on a given position
	 * @param {number} index - index of node to remove
	 * @returns {Node} Removed node
	 */
	remove(index) {
		if (index < 0 || index > this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		const removed = this.get(index);

		removed.prev.next = removed.next;
		removed.next.prev = removed.prev;
		removed.next = null;
		removed.prev = null;

		this.length--;
		return removed;
	}

	/**
	 * Reverses a DDL
	 * @returns {this}
	 */
	reverse() {
		let temp = null;
		let current = this.head;

		while (current !== null) {
			temp = current.prev;
			current.prev = current.next;
			current.next = temp;
			current = current.prev;
		}

		if (temp !== null) {
			this.head = temp.prev;
		}

		return this;
	}
}

module.exports = DoublyLinkedList;
