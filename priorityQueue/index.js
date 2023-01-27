class Node {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(value, priority) {
		const node = new Node(value, priority);

		this.values.push(node);
		this.bubbleUp();
	}

	bubbleUp() {
		let index = this.values.length - 1;
		const element = this.values[index];
		while (index > 0) {
			const parentIdx = Math.floor((index - 1) / 2);
			const parent = this.values[parentIdx];
			if (element.priority <= parent.priority) break;
			this.values[index] = parent;
			this.values[parentIdx] = element;
			index = parentIdx;
		}
	}

	dequeue() {
		const max = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}
		return max;
	}

	sinkDown() {
		let index = 0;
		const element = this.values[index];
		while (true) {
			const leftIdx = 2 * index + 1;
			const rightIdx = leftIdx + 1;
			let left, right;
			let swap = null;
			if (leftIdx < this.values.length) {
				left = this.values[leftIdx];
				if (left.priority > element.priority) {
					swap = leftIdx;
				}
			}

			if (rightIdx < this.values.length) {
				right = this.values[rightIdx];
				if (
					(!swap && right.priority > element.priority) ||
					(swap && right.priority > left.priority)
				) {
					swap = rightIdx;
				}
			}
			if (!swap) break;
			this.values[index] = this.values[swap];
			this.values[swap] = element;
			index = swap;
		}
	}
}

module.exports = priorityQueue;
