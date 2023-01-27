class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
	}

	insertLast(data) {
		const node = new Node(data);
		if (!this.head) {
			this.head = node;
			return;
		}

		let current = this.head;
		while (current.next) {
			current = current.next;
		}
		current.next = node;
	}

	insertArray(arr) {
		arr.forEach((data) => {
			this.insertLast(data);
		});
	}

	parseToArray() {
		const result = [];
		let current = this.head;
		while (current) {
			result.push(current.data);
			current = current.next;
		}
		return result;
	}
	reverse() {
		if (!this.head || !this.head.next) return;

		let current = this.head;
		let previous = null;
		let next = current.next;
		let count = 0;
		while (current) {
			next = current.next;
			current.next = previous;
			previous = current;
			current = next;
			count++;
		}
		this.head = previous;
	}
}

module.exports = SinglyLinkedList;
