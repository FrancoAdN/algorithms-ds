class Stack {
	constructor() {
		this.queue1 = [];
		this.queue2 = [];
	}

	push(val) {
		this.queue1.push(val);
		return this;
	}

	pop() {
		if (!this.queue1.length) {
			return null;
		}
		while (this.queue1.length > 1) {
			this.queue2.push(this.queue1.shift());
		}
		let val = this.queue1.shift();
		while (this.queue2.length) {
			this.queue1.push(this.queue2.shift());
		}
		return val;
	}
}

module.exports = Stack;
