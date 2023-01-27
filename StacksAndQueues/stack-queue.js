class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(value) {
		const node = new Node(value);
		if (!this.first) {
			this.first = node;
			this.last = node;
		} else {
			const temp = this.first;
			this.first = node;
			this.first.next = temp;
		}

		return ++this.size;
	}

	pop() {
		if (!this.first) return null;
		let temp = this.first;

		if (this.first === this.last) {
			this.last = null;
		}

		this.first = this.first.next;
		this.size--;
		return temp.value;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(value) {
		const node = new Node(value);
		if (!this.first) {
			this.first = node;
			this.last = node;
		} else {
			this.last.next = node;
			this.last = node;
		}

		return ++this.size;
	}

	dequeue() {
		if (!this.first) return null;
		let temp = this.first;

		if (this.first === this.last) {
			this.last = null;
		}

		this.first = this.first.next;
		this.size--;
		return temp.value;
	}
}
